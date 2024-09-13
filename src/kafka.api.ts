import { ServiceBroker } from "moleculer";
import KnAPI from "@willsofts/will-api";

const broker = new ServiceBroker({
    nodeID: "broker-node-kafka-1",
    transporter: "kafka://127.0.0.1:9092"
});

broker.createService({
    name: "api",
    mixins: [KnAPI],
    settings: {
        routes: [
            {
                mappingPolicy: "all",
                aliases: {
                    "GET service/findby/:sharecode": "service.findby"
                }
            }
        ]
    },
});

broker.start()

/*
this must install & run kafka-server in order to use as a communication bus
after start with kafka.service broker then can call

curl http://localhost:8080/api/service/list
curl http://localhost:8080/api/service/findby/BBL
curl http://localhost:8080/api/service/collect?sharecode=BBL
curl -v -X POST -H "Content-Type: application/json" http://localhost:8080/api/service/collect -d "{\"sharecode\":\"BBL\"}"

*/
