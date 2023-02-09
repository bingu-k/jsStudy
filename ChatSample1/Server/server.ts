const WebSocketS = require("ws").Server;

export class Server {
    public client :any = [];
    public wss :any = null;
    public server :any = null;

    public start(port :number) :void {
        this.wss = new WebSocketS({ port :port });
        console.log("WebSocket Initialized", port);

        this.wss.on("connection", (ws :any) => {
            this.client.push(ws);
            console.log("Connected total:", this.client.length);

            ws.on("message", (message :string) => {
                console.log("received: %s", message);
                ws.send("Good, Nice to meet you, This is Sever!");
            });
        });
        this.wss.on("close", (error :any) => {
            console.log("WebServer close", error);
        });
        this.wss.on("error", (error :any) => {
            console.log(error);
        });
    }
}