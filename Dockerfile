# Use official Node.js
FROM node:8.6.0

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Copy files
COPY package.json .
COPY .babelrc .
COPY src ./src

# Install dependencies
RUN yarn install

# Build
RUN yarn build

# Delete src
RUN rm -rf src

# Run
EXPOSE 8000
CMD yarn serve
