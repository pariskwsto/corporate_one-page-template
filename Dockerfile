FROM node:19.6.0 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install gulp-cli -g

COPY . .

RUN gulp build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80