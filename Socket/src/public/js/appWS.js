const msgList = document.querySelector("ul");
const msgForm = document.querySelector("#message");
const nickForm = document.querySelector("#nick");
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMsg(type, payload) {
    const msg = {type, payload};
    return JSON.stringify(msg);
}

socket.addEventListener("open", () => {
    console.log("Connected to Browser!");
})

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    msgList.append(li);
})

socket.addEventListener("close", () => {
    console.log("Disconnected to Server!");
})

msgForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = msgForm.querySelector("input");
    socket.send(makeMsg("msg", input.value));
    const li = document.createElement("li");
    li.innerText = `You : ${input.value}`;
    msgList.append(li);
    input.value = "";
});

nickForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMsg("nickname", input.value));
    input.value = "";
})