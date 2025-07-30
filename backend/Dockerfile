# backend/Dockerfile
FROM oven/bun:1.1.13 AS base

WORKDIR /app

COPY . .

RUN bun install
EXPOSE 8787
CMD ["bun", "src/index.ts"]