FROM node:8-slim
MAINTAINER Mark Cola <mark@doomsdaytuna.com>

ENV NODE_ENV=production

RUN mkdir -p /app
WORKDIR /app

ADD ./node_modules /app/node_modules
ADD ./src /app
ADD ./config /app/config

ENTRYPOINT ["node", "."]
EXPOSE 3030
