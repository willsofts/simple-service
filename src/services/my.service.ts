import { ServiceSchema } from "moleculer";
import KnService from "@willsofts/will-db";
import MyHandler from "../MyHandler";

const MyService : ServiceSchema = {
    name: "service",
    mixins: [KnService],
    handler: new MyHandler(), 
    settings: {
        disableColumnSchema: true,
    }    
}

export = MyService;
