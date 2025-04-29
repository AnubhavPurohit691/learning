FROM node:23:alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install -g pnpm

RUN pnpm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

RUN pnpm prisma migrate dev

RUN pnpm prisma generate

RUN pnpx run build


EXPOSE 3000

CMD ["pnpm", "start"]

