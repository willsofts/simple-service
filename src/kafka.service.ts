import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";
import MyHandler from "./MyHandler";

const broker = new ServiceBroker({
    nodeID: "broker-node-kafka-2",
    transporter: "kafka://127.0.0.1:9092"
});

broker.createService({
    name: "service",
    mixins: [KnService],
    handler: new MyHandler(), 
    settings: {
        disableColumnSchema: true,
    }    
});

broker.start()

.then(() => broker.call("service.retrieve").then((result) => { 
    console.log("service.retrieve",result);
}))
