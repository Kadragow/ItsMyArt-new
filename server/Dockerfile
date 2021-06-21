FROM node:14
WORKDIR /server
COPY . /server
RUN npm install && npm install -g serve env-cmd
EXPOSE 5000
# FROM node:14
# WORKDIR /server
# COPY package*.json /api/
# RUN npm install
# COPY . /server/
# EXPOSE 5000
# CMD ["npm", "start"]