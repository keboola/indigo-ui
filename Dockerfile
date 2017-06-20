FROM node:7

RUN apt-get update -q \
  && apt-get install apt-transport-https \
  && wget https://dl.yarnpkg.com/debian/pubkey.gpg -O pubkey.gpg \
  && apt-key add pubkey.gpg \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
  && apt-get update -q \
  && apt-get install yarn -y

RUN npm install -g grunt-cli
