# syntax=docker/dockerfile:1

# ── Stage 1: build ────────────────────────────────────────────────────────────
# Install all dependencies (including devDependencies) and compile every package.
FROM node:22-alpine AS builder

WORKDIR /app

# Copy the full monorepo source
COPY . .

# Install all dependencies (devDependencies needed for codegen + build)
RUN npm ci

# Build all packages in order: db → codegen → server (tsc) → app (vite)
RUN npm run build

# ── Stage 2: production image ─────────────────────────────────────────────────
# Copy the built tree from the builder, then drop devDependencies.
FROM node:22-alpine

WORKDIR /app

# Copy the complete built workspace from the builder stage.
# This preserves workspace symlinks and all relative paths the server relies on
# (e.g. ../../app/dist, ../../db/drizzle resolved at runtime from server/dist/src/).
COPY --from=builder /app .

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

# server/dist/src/index.js — tsc preserves the src/ directory structure
# (outDir: ./dist in tsconfig.build.json, source lives under src/).
CMD ["node", "server/dist/src/index.js"]
