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

You will need to set the `MONGODB_URL` variable in your .env file to `mongodb://mongodb:27017/sherlogs`. If you alternatively want to use the Sherlogs application locally without Docker, you will need to create your own database and set the `MONGODB_URL` to your personal database connection string. 

Lastly, you will need to set the `PORT` variable in the .env file to match the port that the node_container is running on, `8080`. 
## Start application and run containers in foreground directly from DockerHub images

`docker compose up`



