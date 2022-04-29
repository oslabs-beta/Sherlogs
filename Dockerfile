# FROM node:16.5.0-alpine
FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run app:build

CMD [ "npm", "run", "server:run" ]
