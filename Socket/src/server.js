import http from "http"
// import WebSocket from "ws";
import SocketIO from "socket.io"
import express from "express"

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const httpServer = http.createServer(app);
const ioServer = SocketIO(httpServer);

function publicRooms() {
	const {
		sockets: {
			adapter: {sids, rooms},
		},
	} = ioServer;
	const publicRooms = [];
	rooms.forEach((_, key) => {
		if (sids.get(key) === undefined) {
			publicRooms.push(key);
		}
	})
	return publicRooms
}

ioServer.on("connection", (socket) => {
	socket["nickname"] = "Unknown";
	socket.on("enter_room", (info, done) => {
		socket.join(info.roomName);
		done();
		socket.to(info.roomName).emit("welcome", socket.nickname);
	});
	socket.on("message", (info, done) => {
		socket.to(info.roomName).emit("message", { nick: socket.nickname, text: info.text });
		done();
	});
	socket.on("nickname", (nickname) => { socket["nickname"] = nickname });
	socket.on("disconnecting", () => {
		socket.rooms.forEach((room) => {
			socket.to(room).emit("Bye", socket.nickname);
		});
	});
})

// const wsServer = new WebSocket.Server({ httpServer });
// const sockets = [];

// wsServer.on("connection", (socket) => {
// 	sockets.push(socket);
// 	console.log("Connected to Sever!");
// 	socket.on("close", () => {
// 		console.log("Disconneted from the Browser");
// 	});
// 	socket.on("message", ( message ) => {
// 		const msg = JSON.parse(message);
// 		switch (msg.type) {
// 			case "msg":
// 				sockets.forEach((s) => {
// 					if (s !== socket) {
// 						s.send(`${socket["nick"] === undefined ? "Unknown" : socket["nick"]} : ${msg.payload}`)
// 					}
// 				});
// 				break
// 			case "nickname":
// 				socket["nickname"] = msg.payload;
// 				console.dir(socket);
// 				break
// 		}
// 	});
// });

httpServer.listen(3000, handleListen);