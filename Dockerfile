# Latest version of Node
FROM node:latest

# http://jdlm.info/articles/2016/03/06/lessons-building-node-app-docker.html
# Add a user with restricted privileges
# RUN useradd --user-group --create-home --shell /bin/false app &&\
# npm install --global npm@3.7.5

WORKDIR /app
ADD package.json .

# EXPOSE 3306

RUN npm install