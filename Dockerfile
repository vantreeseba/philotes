# syntax=docker/dockerfile:1

FROM node:22-alpine

# Required for PGlite WASM and Vite build
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy the full monorepo source
COPY . .

# Install all dependencies (devDependencies needed for codegen + build)
RUN npm ci

# Build db package (needed by server + app at runtime)
# Run codegen (generates GraphQL types)
# Build frontend (Vite, output to app/dist)
RUN npm run build -w db && npm run codegen && npm run build -w app

# Drop devDependencies to shrink the image. PGlite's WASM files live in the
# runtime dependency tree and are preserved automatically.
RUN npm prune --omit=dev

ENV NODE_ENV=production
ENV PORT=3001
# PGlite will store its database files here. Mount a volume at /data to persist
# data across container restarts.
ENV DATABASE_URL=/data/pgdata

# Create persistent-data directories. The server auto-creates /avatars at
# startup, but declaring them here makes the intent explicit.
RUN mkdir -p /data /avatars

EXPOSE 3001

# Persist the PGlite database and avatar uploads across container restarts.
VOLUME ["/data", "/avatars"]

# Run server directly as TypeScript — no compile step needed.
CMD ["node", "--experimental-strip-types", "server/src/index.ts"]
