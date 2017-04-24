FROM debian:jessie

MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

ADD ./appKoa/app.js ./appKoa/movies.js /app/
ADD ./appKoa/node_modules/ /app/
ADD ./appKoa/package.json /app/

RUN apt-get update && \
    set -xe && \
    apt-get -y install apt-utils curl sudo nano build-essential && \
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs && \
    apt-get update && \
    cd /app/ && npm install && \
    apt-get clean && \
    npm cache clean