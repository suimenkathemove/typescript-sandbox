FROM node:18-alpine

WORKDIR /workdir

COPY package.json yarn.lock ./
COPY src ./src
COPY tsconfig.json ./

RUN yarn install

CMD yarn run run
