FROM node:22.8.0-slim

RUN apt update && \
 apt install openssl procps -y &&\
 yarn add global @nestjs/cli@10.0.0

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]