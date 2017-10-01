# Node.js on Docker

Testing Node.js in a Docker container.

## Installation

```
yarn
```

## Environment variables

Pass the following environment variables when running `yarn start` or `yarn run serve`:

| Variable name | Description
:--- | :---
`TWILIO_ACCOUNT_SID` | Twilio account SID
`TWILIO_AUTH_TOKEN` | Twilio auth token
`PHONE_NUMBER_TWILIO` | Twilio account phone number, to send text messages from
`PHONE_NUMBER_ME` | Phone number to send text messages to

## Development

Run on [localhost:8000](http://localhost:8000):

```
PHONE_NUMBER_TWILIO=+1xxxxxxxxxx \
PHONE_NUMBER_ME=+1xxxxxxxxxx \
TWILIO_ACCOUNT_SID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \
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
PHONE_NUMBER_TWILIO=+1xxxxxxxxxx \
PHONE_NUMBER_ME=+1xxxxxxxxxx \
TWILIO_ACCOUNT_SID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \
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

Run the Docker container called `node-docker` on port `8000`, passing environment variables:

```
docker run \
-e PHONE_NUMBER_TWILIO='+1xxxxxxxxxx' \
-e PHONE_NUMBER_ME='+1xxxxxxxxxx' \
-e TWILIO_ACCOUNT_SID='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
-e TWILIO_AUTH_TOKEN='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
-p 8000:8000 node-docker
```

To kill the container, from a new Terminal:

```
docker ps
docker kill <uniqueId>
```
