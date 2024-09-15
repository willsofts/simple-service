import KnAPI from "@willsofts/will-api";
import { ServiceSchema } from "moleculer";

const GatewayService : ServiceSchema = {
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
};

export = GatewayService;
