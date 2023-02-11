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
	let msg :Message = {name: socket.nickname, text: `Enter the ${RoomName}`, time: new Date().toLocaleTimeString('en-US')};
    socket.to(RoomName).emit(SOCKET_EVENT.RECEIVE, msg);
    console.log(`(${msg.time})${msg.name} : ${msg.text}`);
  });
  socket.on(SOCKET_EVENT.CHANGE_NICKNAME, (nick :string) => {
	let msg :Message = { name: `${socket.nickname} -> ${nick}`, text: "Change name", time: new Date().toLocaleTimeString('en-US')};
    socket.to(RoomName).emit(SOCKET_EVENT.RECEIVE, msg);
    socket.nickname = nick;
  })

  socket.on(SOCKET_EVENT.SEND, (info :Message) => {
	  socket.to(RoomName).emit(SOCKET_EVENT.RECEIVE, info);
	  console.log(`(${info.time})${info.name} : ${info.text}`);
  });

  socket.on(SOCKET_EVENT.DOSCONNECT, () => {
	let msg :Message = { name: `${socket.nickname}`, text: `Leave the ${RoomName}`, time: new Date().toLocaleTimeString('en-US')};
    socket.to(RoomName).emit(SOCKET_EVENT.RECEIVE, msg);
    console.log(`(${msg.time})${msg.name} : ${msg.text}`);
});
});

httpServer.listen(2222, () => {
  console.log (`Listening Port : ${SERVER_PORT}`);
});