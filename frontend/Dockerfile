FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

RUN npm run build

# Build Stage 2

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/.output/ ./

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]