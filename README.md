# Simple Service

Demostration of communication services using bus as a transporter

## How To Install

This project is under [@willsofts](https://github.com/willsofts) libraries protection as private access, then you have to gain access key from administrator and setting in your own environment before start installation. \
ex. \
Window

    set NPM_TOKEN=your access token key here

Linux

    export NPM_TOKEN=your access token key here

## Installation

With npm installed (comes with [node](https://nodejs.org/en/)), run the following commands into a terminal in the root directory of this project:

```shell
npm install
npm run build
```

### Configuration

This project require configuration ([config](https://www.npmjs.com/package/config)) setting by `config/default.json` in order to configure database connection.

### Demostration List

- [NATs](https://nats.io/) transporter, this must install & run [NATs](https://nats.io/) server in order to use nats-server as a communication bus
    - nats.service    - basic usage NATs as a service
    - nats.api        - basic usage NATs as a API gateway
- [Redis](https://redis.io/) transporter, this must startup [Redis](https://redis.io/) server in order to use redis as a communication bus
    - redis.service    - basic usage Redis as a service
    - redis.api        - basic usage Redis as a API gateway
- [RabbitMQ](https://www.rabbitmq.com/) transporter, this must startup [RabbitMQ](https://www.rabbitmq.com/) server in order to use RabbitMQ as a communication bus
    - rabbit.service    - basic usage RabbitMQ as a service
    - rabbit.api        - basic usage RabbitMQ as a API gateway
- [Kafka](https://kafka.apache.org/) transporter, this must install & run [Kafka](https://kafka.apache.org/) server in order to use as a communication bus
    - kafka.service    - basic usage Kafka as a service
    - kafka.api        - basic usage Kafka as a API gateway

After startup service and api gateway separately then you can invoke by [curl](https://curl.se/download.html):

* curl http://localhost:8080/api/service/list
* curl http://localhost:8080/api/service/findby/BBL
* curl http://localhost:8080/api/service/collect?sharecode=BBL
* curl -v -X POST -H "Content-Type: application/json" http://localhost:8080/api/service/collect -d "{\"sharecode\":\"BBL\"}"
