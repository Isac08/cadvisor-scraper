FROM node:20-alpine

WORKDIR /app

COPY minio-test.mjs .

RUN npm install minio

CMD ["node", "minio-test.mjs"]
