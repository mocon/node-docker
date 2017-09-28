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

Build in a Docker container called `node-docker`:

```
yarn run docker-build # Runs `docker build -t node-docker .`
```

Run the Docker container called `node-docker` on port `8000`:

```
yarn run docker-run # Runs `docker run -p 8000:8000 node-docker`
```
