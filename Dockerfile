# Use latest Node
FROM node:8.6.0

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Copy files
COPY package.json .
COPY src ./src

# Install dependencies
RUN yarn install

# Build
RUN yarn build

# Run
EXPOSE 8000
CMD yarn serve
