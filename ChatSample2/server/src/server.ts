import http from "http"
import { Server } from "socket.io"

import { Message, SERVER_PORT, SOCKET_EVENT } from "../../client/src/types"

const httpServer :http.Server = http.createServer();
const io :Server = new Server(httpServer, {
  cors: {
      origin: '*'
  }
});

const RoomName = "channel";

io.on("connection", (socket : any) => {
  console.log('Connected New client');
  socket["nickname"] = "Unknown";

  socket.on(SOCKET_EVENT.JOIN, (nick :string) => {
    socket.join(RoomName);
    if (socket.nickname === "Unknown") {
      socket.nickname = nick;
    }
    console.log(`${socket.nickname} : Enter the Server`);
  });
  socket.on(SOCKET_EVENT.CHANGE_NICKNAME, (nick :string) => {
    console.log(`${socket.nickname} -> ${nick} : Change name`);
    socket.nickname = nick;
  })

  socket.on(SOCKET_EVENT.SEND, (info :Message) => {
    console.log(`${info.name} : ${info.text}`)
    const msg :Message = { name: info.name, text: info.text };
    socket.to(RoomName).emit(SOCKET_EVENT.RECEIVE, msg);
  });

  socket.on(SOCKET_EVENT.DOSCONNECT, () => console.log(`${socket.nickname} : Disconnected`));
});

httpServer.listen(2222, () => {
  console.log (`Listening Port : ${SERVER_PORT}`);
});