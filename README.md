# Donation widget

## Development (Docker-Compose version) &#8592; use this one :)

```bash
# Clean up docker-compose environment:
# - remove local containers
# - remove named volumes declared in the compose file and anonymous volumes attached to containers
# - remove containers for services not defined in the compose file
$ docker-compose down --rmi local --volumes --remove-orphans

# Check .env config in the api folder. Create if not exists (you can copy and edit .env.sample)
# Check .env config in the fe folder. Create if not exists (you can copy and edit .env.sample)

# Rebuild containers:
$ docker-compose build --no-cache

# Run the application in the development mode:
$ docker-compose up

# Also you can run only needed services:
$ docker-compose up <service_name1> <service_name2>

# View service logs:
$ docker-compose logs <service_name>
```

Docker-compose-based development environment supports editing of the
`server/src`, `server/tests`, `client/src`, `client/public`, `client/tests`.
If you will change anything outside of these directories you should rebuild docker images.

## Development (Docker version)

You should have MongoDB server running on your system.

Build, run and stop **Server** service:

```bash
# Build docker image:
$ cd server
$ docker build --tag donation-widget-server .

# Run container:
$ docker run --name donation-widget-server --env-file .env --network="host" donation-widget-server
$ # docker run builds AND starts the container
$ # after initial run "docker start server" should be used

# Stop and remove container:
$ docker rm --force donation-widget-server
```

Build, run and stop **Client** service:

```bash
# Build docker image:
$ cd client
$ docker build --tag client .

# Run container:
$ docker run --name client --env-file .env --network="host" client
$ # docker run builds AND starts the container
$ # after initial run "docker start client" should be used

# Stop and remove container:
$ docker rm --force client
```

## Development (no Docker version)

You should have Node.js, yarn, MongoDB server (running) installed on your system.
Setup development environment:

```bash
# Server service in the first terminal:
$ cd <project-folder>/server
$ yarn
$ yarn serve

# Client service in the second terminal:
$ cd <project-folder>/client
$ yarn
$ yarn serve
```
