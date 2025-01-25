#Learnig Docker
FROM node:22-alpine

WORKDIR /src

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["node", "dist/index.js"]
