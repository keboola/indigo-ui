#!/bin/bash

docker-compose run --rm \
  -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  aws s3 cp build s3://indigo.keboola.com --recursive --acl "public-read"
