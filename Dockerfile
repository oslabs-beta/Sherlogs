# FROM node:16.5.0-alpine
FROM node:16-alpine
COPY . .
RUN npm install
RUN npm run app:build

CMD [ "npm", "run", "server:run" ]
