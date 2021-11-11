const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const fs = require("fs");

let players = 0;

app.use(express.static("public"));
app.use(express.static("public/build"));

io.on("connection", (socket) => {
    socket.on("hello", () => {
        console.log("gracz polaczony");
        players++;
        if (players == 1) {
            console.log("oczekiwanie na drugiego gracza");
        }
        if (players == 2) {
            console.log("rozpoczynanie gry");
            begin();
        }
    })
});

server.listen(3000);

console.log("server uruchomiony");
console.log("oczekiwanie na dwójke graczy");