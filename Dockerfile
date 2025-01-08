FROM node:22-alpine

WORKDIR /src

COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 5000

CMD ["node", "dist/index.js"]