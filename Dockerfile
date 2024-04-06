FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN apk add htop
RUN npm install
RUN npm install -g pm2

COPY . .

CMD pm2 start ecosystem.config.js && sleep 310000000