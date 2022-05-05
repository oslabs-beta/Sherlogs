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

## You can also deploy the application in your cloud provider of choice

Remember to add the necessary environment variables.

## Contributors ✨

<table>
  <tr>
    <td align="center">
        <a href="https://github.com/Agfeynman/"><img src="https://github.com/Agfeynman.png" width="100px;" alt="AndrésGutiérrez"/> <br />
        <sub>
        <b>Andrés Gutiérrez</b></sub></a><br />
        <a href="https://www.linkedin.com/in/andresgutierrezramirez/" title="LinkedIn">👤</a> 
        <a href="https://github.com/Agfeynman" title="GitHub">💻</a>
    </td>
    <td align="center">
        <a href="https://github.com/velveteen-ant"><img src="https://github.com/velveteen-ant.png" width="100px;" alt="KyleneHohman"/> <br />
        <sub>
        <b>Kylene Hohman</b></sub></a><br />
        <a href="https://www.linkedin.com/in/kylene-hohman/" title="LinkedIn">👤</a> 
        <a href="https://github.com/velveteen-ant" title="GitHub">💻</a>
    </td>
    <td align="center">
        <a href="https://github.com/felisity09"><img src="https://github.com/felisity09.png" width="100px;" alt="FelicityNguyen"/> <br />
        <sub>
        <b>Felicity Nguyen</b></sub></a><br />
        <a href="https://www.linkedin.com/in/felicity09/" title="LinkedIn">👤</a> 
        <a href="https://github.com/felisity09" title="GitHub">💻</a>
    </td>
    <td align="center">
        <a href="https://github.com/crystalpederson"><img src="https://github.com/crystalpederson.png" width="100px;" alt="CrystalPederson"/> <br />
        <sub>
        <b>Crystal Pederson</b></sub></a><br />
        <a href="https://www.linkedin.com/in/crystalpederson/" title="LinkedIn">👤</a> 
        <a href="https://github.com/crystalpederson" title="GitHub">💻</a>
    </td>
  </tr>
</table>

<b>MIT License</b>
Copyright (c) 2022 OSLabs Beta