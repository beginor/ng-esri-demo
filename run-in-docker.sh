#!/bin/bash
docker run --interactive --tty --rm --name node-dev \
  --publish 4200:4200 \
  --publish 9876:9876 \
  --volume $(pwd):/app \
  --volume $(pwd)/../dev-env/_npmrc:/root/.npmrc \
  --volume $(pwd)/../dev-env/_npm:/root/.npm \
  --workdir /app \
  node:8.11-slim \
  bash
