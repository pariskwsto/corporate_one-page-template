FROM node:20.11.0 AS builder

WORKDIR /app

COPY ./package*.json ./

RUN npm install && npm install gulp-cli@2.3.0 -g

COPY ./gulpfile.js ./gulpfile.js
COPY ./src/assets ./src/assets
COPY ./src/index.html ./src
COPY ./webpack.config.js ./

RUN gulp build

FROM nginx:stable-alpine AS production

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist ./

EXPOSE 80