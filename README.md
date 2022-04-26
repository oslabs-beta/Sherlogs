# Sherlogs
Log management tool 

## Requirements 

Install Docker Desktop, Docker Compose, and Node

## Installation and setup options

Clone down this repository. You will need `git`, `node` and `npm` installed globally on your machine. 

Create a `.env` file using the template in the `.env.template` file to set the environment variables. 

## Docker Setup

You will need to ensure your machine meets the requirements for Docker Desktop. Follow <a href="https://www.docker.com/products/docker-desktop/" target="_blank">this</a> link to view setup documentation per your operating system.

If you are using macOS or Windows, Docker Compose is included as part of the Docker Desktop installation and does not need to be installed separately. For Linux systems, or if you have trouble running Docker Compose, follow <a href="https://docs.docker.com/compose/install/" target="_blank">this</a> link to view further documentation and instructions for installing Docker Compose. 

You will need to creare and set .env file variables both within the Sherlogs application and within the application you wish to send logs from. In your Sherlogs .env file, you will need to select port values for each environment variable . The structure of the MONGODB_URL is as follows: mongodb://mongodb:(MONGODB_DOCKER_PORT)/sherlogs. Note that you will need to add the same port value that you set the MONGODB_DOCKER_PORT value to. In your personal application, you will need to add a LOGS_API_ENDPOINT value into your .env file and configure the value to match the NODE_DOCKER_PORT value you have selected within the Sherlogs application. 

### Installation

`npm install`

### Create docker images

`docker compose build`

### Start application and run containers in foreground

`docker compose up`

### Start application and run containers detached in background

`docker compose up -d`

### Stop containers if they are running in foreground

`CTRL+C`

### Stop containers if they are running in background

`docker compose stop` 

### Stop and remove containers 

`docker compose down`

