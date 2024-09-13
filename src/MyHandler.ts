import { KnHandler } from "@willsofts/will-db";
import { KnModel } from "@willsofts/will-db";
import { KnSQL, KnResultSet } from "@willsofts/will-sql";

class MyHandler extends KnHandler {

    public override async retrieve(context: any) : Promise<KnResultSet> {
        console.debug("MyHandler",this);
        console.debug("MyHandler:context",context);
        console.debug("MyHandler:model",this.model);
        return Promise.resolve({rows: {handler: "MyHandler.retrieve"}, columns: null});
    }

    //this is an addon action
    public async findby(context: any) : Promise<KnResultSet> {
        console.log("get: context",context);
        let db = this.getPrivateConnector(this.model);
        try {
            let knsql = new KnSQL("select * from testdbx");
            if(context.params.sharecode) {
                knsql.append(" where share = ?sharecode ");
                knsql.set("sharecode",context.params.sharecode);
            }
            this.debug(knsql);
            let rs = await knsql.executeQuery(db);
            //if(rs) delete rs.columns; //try out uncomment
            return Promise.resolve(rs);
        } finally {
            db.close();
        }
    }

    //must declared handlers in order to merge addon action to service 
    //ex. name: "findby" is the handler naming function from public findby(context) method
    public handlers = [ {name: "findby"} ];

    //have to defined model to connect db
    public model : KnModel = { name: "testdbx", alias: { privateAlias: "MYSQL" } };
    public override async collect(context: any) : Promise<KnResultSet> {
        console.log("context",context);
        let db = this.getPrivateConnector(this.model);
        try {
            let knsql = new KnSQL("select * from testdbx");
            if(context.params.sharecode) {
                knsql.append(" where share = ?sharecode ");
                knsql.set("sharecode",context.params.sharecode);
            }
            this.debug(knsql);
            let rs = await knsql.executeQuery(db);
            //if(rs) delete rs.columns; //try out uncomment
            return Promise.resolve(rs);
        } finally {
            db.close();
        }
    }

}

export = MyHandler;
