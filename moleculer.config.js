var os = require("os");

module.exports = {
    nodeID: "simple-service-"+os.hostname().toLowerCase() + "-" + process.pid,
    logger: [
        {
            type: "Console",
            options: {
                level: "debug",
                color: true,
                formatter: "full",
            } 
        },                   
        {
            type: "File",
            options: {
                level: "debug",
                formatter: "full",
                folder: "./logs",
                filename: "simple-{date}.log",
                eol: "\n",
                interval: 1000,
            }
        }
    ],
    transporter: "NATS",
    /*    
    transporter: "NATS",
    transporter: "nats://localhost:4222",
    requestTimeout: 5 * 1000,
    */
};
