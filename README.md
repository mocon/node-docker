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

Build in a Docker container called `nodetest`:

```
docker build -t nodetest .
```

Run the Docker container called `nodetest` on port `8000`:

```
docker run -p 8000:8000 nodetest
```
