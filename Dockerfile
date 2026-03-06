# syntax=docker/dockerfile:1

# ── Stage 1: install all dependencies and build ───────────────────────────────
FROM node:22-slim AS builder

WORKDIR /app

# Copy workspace manifests first for better layer caching
COPY package.json package-lock.json ./
COPY db/package.json ./db/
COPY server/package.json ./server/
COPY app/package.json ./app/

RUN npm ci --legacy-peer-deps

# Copy all source
COPY . .

# Full production build: db → codegen → server (tsc) → app (vite)
RUN npm run build

# ── Stage 2: production image ─────────────────────────────────────────────────
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Only copy what is needed to run
COPY package.json package-lock.json ./
COPY db/package.json ./db/
COPY server/package.json ./server/
COPY app/package.json ./app/

# Install production dependencies only
RUN npm ci --omit=dev --legacy-peer-deps

# Compiled server
COPY --from=builder /app/server/dist ./server/dist

# Built frontend static files (served by the server via sirv)
COPY --from=builder /app/app/dist ./app/dist

# db package compiled output (imported at runtime by the server)
COPY --from=builder /app/db/dist ./db/dist

# Drizzle migration files (run on startup by the server)
COPY --from=builder /app/db/drizzle ./db/drizzle

EXPOSE 3001

# DATABASE_URL controls where PGlite stores its data.
# Mount a volume at this path to persist data between container restarts.
# Example: docker run -v /host/data:/data -e DATABASE_URL=/data philotes
ENV DATABASE_URL=/data

VOLUME ["/data"]

CMD ["node", "server/dist/index.js"]
