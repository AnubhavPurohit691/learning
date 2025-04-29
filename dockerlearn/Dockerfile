FROM node:23-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm

RUN pnpm install

COPY . .


RUN pnpm prisma generate

RUN pnpm run build


EXPOSE 3000

CMD ["pnpm", "start"]

