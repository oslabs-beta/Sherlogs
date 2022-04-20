# FROM node:16.5.0-alpine
FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"] /usr/src/app
RUN npm install
COPY . .
EXPOSE 3300
CMD [ "npm", "run", "server:run" ]
