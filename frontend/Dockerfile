# frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Build de l'app
RUN npm run build

# Expose le port Next.js customisé (3001 ici)
EXPOSE 3001

CMD ["npm", "run", "start"]
