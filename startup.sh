#!/bin/sh
cp .env.example ./prisma/.env
npx prisma migrate dev
npm run start
