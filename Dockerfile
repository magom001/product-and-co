FROM node:alpine AS builder
WORKDIR /app/
COPY . .
RUN npm ci && npm run build

FROM node:alpine
WORKDIR /usr/local/app
COPY --from=builder /app/static ./static
COPY --from=builder /app/server.js /app/data.json /app/.env ./
CMD ["node", "./server.js"]
