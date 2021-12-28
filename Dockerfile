FROM node:16

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["./startup.sh"]