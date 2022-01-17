FROM node:16-alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY movies.csv ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]