# Client for Arc Donation Widget

using Vue, Vuex

## Development (Docker version)

Build, run and stop **Client** service:

```bash
# Build docker image:
$ docker build --tag client .

# Run container:
$ docker run --name client --env-file .env --network="host" client
$ # docker run builds AND starts the container
$ # after initial run "docker start client" should be used

# Stop and remove container:
$ docker rm --force client
```

## Development (no Docker version)

#### Project setup

```
yarn install
```

#### Compile and hot-reload for development

```
yarn serve
```

#### Run unit tests

```
yarn test:unit
```

#### Run end-to-end tests

```
yarn test:e2e
```

#### Lint and fix files

```
yarn lint
```

#### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
