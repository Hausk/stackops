FROM node:20-alpine

WORKDIR /app

# Copie les fichiers nécessaires
COPY package*.json ./

# Installation des deps
RUN npm ci

# Copie le reste du code
COPY . .

# Build de l'app
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
