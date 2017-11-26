# Latest version of Node
FROM node:latest

WORKDIR /app
ADD package.json .

# EXPOSE 3306

RUN npm install