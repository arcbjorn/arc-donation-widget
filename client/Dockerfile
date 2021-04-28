# develop stage
FROM node:lts-slim as develop-stage
WORKDIR /app
RUN chown node:node /app
USER node
COPY package*.json .
COPY yarn.lock .
RUN yarn install
COPY . .
