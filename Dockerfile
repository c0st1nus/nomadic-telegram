FROM node:22 AS builder
WORKDIR /app

COPY package.json ./

RUN npm i


COPY src ./src
COPY public ./public
COPY vite.config.ts ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY tsconfig.json ./
COPY index.html ./

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]