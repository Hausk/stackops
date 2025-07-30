# backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Pour ESM ou TypeScript, adapte ici si besoin
EXPOSE 3000

CMD ["node", "index.js"]
