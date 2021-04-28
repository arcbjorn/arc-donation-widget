## Server for Arc Donation Widget

using Koa, Jest

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

### Development (No Docker version)

```sh
yarn
yarn serve
```

#### Lint

```sh
yarn lint
```

#### Test

```sh
yarn test
```
