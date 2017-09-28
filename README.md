# Node.js on Docker

Testing Node.js in a Docker container.

## Installation

```
yarn
```

## Development

Run on [localhost:8000](http://localhost:8000):

```
yarn start
```

## Build

Build `/src` to `/dist`:

```
yarn build
```

## Serve

Serve `/dist`:

```
yarn run serve
```

## Clean install

Fresh install of the dependencies:

```
yarn run clean
```

## Docker

The following commands require [Docker](https://www.docker.com/) to be installed.

Build in a Docker container called `node-docker`:

```
yarn run docker-build
```

Run the Docker container called `node-docker` on port `8000`:

```
yarn run docker-run
```

To kill the container, from a new Terminal:

```
docker ps
docker kill <uniqueId>
```
