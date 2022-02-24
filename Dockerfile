#this file is responsible for running the node application container
#created image from node image, alpine version
FROM node:16.5.0-alpine
#create new directory for app files and set path in container 
RUN mkdir -p /user/src/app
#create a working directory inside the container to specify where it will be running from 
WORKDIR /user/src/app
#need to copy package json file to get dependencies and copy to our specify directory above
COPY ["package.json", "package-lock.json", "./"] /user/src/app/
#continuous integration to install dependencies 
RUN npm ci 
# RUN npm install
COPY . .
# container exposed network port number 
EXPOSE 3300
#specify command we want to run when container starts
CMD [ "npm", "run", "server:run" ]
