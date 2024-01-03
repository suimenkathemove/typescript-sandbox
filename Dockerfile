FROM node:20-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /workdir

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY src ./src
COPY tsconfig.json ./

CMD pnpm run run
