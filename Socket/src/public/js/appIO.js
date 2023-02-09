const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");
const room = document.querySelector("#room");

room.hidden = true;

let roomName;

function addMessage(msg) {
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = msg;
    ul.appendChild(li);
}

function handleMessageSubmit(event) {
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const value = input.value;
    socket.emit("message", { text: value, roomName: roomName}, () => {
        addMessage(`You: ${value}`);
    });
    input.value = "";
}

function handleNickNameSubmit(event) {
    event.preventDefault();
    const input = room.querySelector("#name input");
    const value = input.value;
    socket.emit("nickname", value);
    input.value = "";
    room.querySelector("#name").hidden = true;
}

function showRoom() {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room : ${roomName}`;
    const msgForm = room.querySelector("#msg");
    const nickForm = room.querySelector("#name");
    msgForm.addEventListener("submit", handleMessageSubmit);
    nickForm.addEventListener("submit", handleNickNameSubmit);
}

function enterRoom(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    roomName = input.value;
    socket.emit("enter_room",{ roomName: roomName }, showRoom);
    input.value = "";
}

form.addEventListener("submit", enterRoom);

socket.on("welcome", (nickname) => {
    addMessage(`\'${nickname}\' Someone joined!`);
});

socket.on("Bye", (nickname) => {
    addMessage(`\'${nickname}\' left T_T`);
})

socket.on("message", (info) => {
    addMessage(`${info.nick}: ${info.text}`);
})