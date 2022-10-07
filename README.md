# MITxPRO-DockerMERN
A Full-Stack MERN (Mongo-Express-React-Node) Application Template in Docker Containers.

* Clone this repo and rename to your target App Name.
* In the .env, .env.development, .env.production and the (3) 'Dockerfile' (Frontend, Backend, and Database)
  configure all the env vars to your project's values, this is used through to generate image and container names as
  well as log event identification.
* It is also used to control the docker-compose activity using teh env var APP_NAME...

```
COMPOSE_PROJECT_NAME=${APP_NAME}
```


* The APP_NAME env var is also used in the docker-compose.yml file to generate consistent ‘container_name: <appname>-<containername>' to explicitly name the sub-containers with a prefix matching the 'appname-' this allows the docker desktop to stack the containers automatically…

```
#
services:
  #
  #  F R O N T E N D
  #  ---------------
  frontend:
    # frontend, client, app ui
    container_name: ${APP_NAME}-frontend
    # use the shared .env file for all 3 Tiers
    env_file:
      - .\.env  # shared environment vars for all 3-Tiers
      - .\.env.${NODE_ENV:-development}  # "development" to override the "production" vars in the 'Dockerfile'
    build:
      context: frontend  # build from \frontend
      args:
        APP_NAME: ${APP_NAME}
        NODE_ENV: ${NODE_ENV:-development}
    ports:
      - '${APP_FRONTEND_PORT:-3000}:${APP_FRONTEND_PORT:-3000}'
    restart: always
    networks:
      - react-express  # frontend to backend connection
    depends_on:
      - backend
  #
  #  B A C K E N D
  #  -------------
  backend:
    # backend, server, app internals
    container_name: ${APP_NAME}-backend
    # use the shared .env file for all 3 Tiers
```
<img src=".\.docker\docker-container-names.png">


* To start Frontend/Client, Backend/Server and Database Nodes/Containers:
```
docker compose up
```

* To start and force a rebuild from current source code:
```
docker compose up --build
```

* To watch the console of any of the Containers (Client-Server-Database):
```
docker logs -f <container-id>
```
* ...or use the integrated Terminal in VS Code.