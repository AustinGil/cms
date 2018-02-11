# Latest version of Node
FROM node:carbon

# http://jdlm.info/articles/2016/03/06/lessons-building-node-app-docker.html
# Add a user with restricted privileges
# RUN useradd --user-group --create-home --shell /bin/false app &&\
# npm install --global npm@3.7.5

WORKDIR /app

COPY package*.json ./

# Used to serve static resources
RUN npm -g install serve

# Install nodemon for hot reload
# RUN npm install -g nodemon

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
# COPY . /app

# EXPOSE 3306
# EXPOSE 8080
# CMD [ "nodemon", "server.js" ]

# serve dist folder on port 8080
# CMD ["serve", "-s", "dist", "-p", "8080"]

# More tips at: https://blog.hasura.io/an-exhaustive-guide-to-writing-dockerfiles-for-node-js-web-apps-bbee6bd2f3c4