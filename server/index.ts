import { Server, ServerWebSocket } from "bun";
import ws from "ws";
const test = [];
let id = 0;
const server = Bun.serve({
  port: "8080",
  fetch(req, server) {
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed :(", { status: 500 });
  },

  websocket: {
    open(ws: ServerWebSocket<{ name: string }>) {
      ws.subscribe("chat");
    },
    message(ws: ServerWebSocket<{ name: string }>, msg: string) {
      ws.publish("chat", msg);
    },
    perMessageDeflate: false,
    publishToSelf: false,
  },
});
console.log(
  `Waiting for  clients to connect...\n`,
  `  http://${server.hostname}:8080/`
);
