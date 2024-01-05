import express from 'express';
import { Server } from "socket.io";
import socket_service from './ws' 

const app = express();

const io = new Server();

socket_service(io);

io.on("connection", (socket) => {
    console.log("A client connected");
});

const PORT = 3000;
io.listen(PORT);
console.log(`Socket.IO server is running on port ${PORT}`);
app.listen(3001, ()=>{
    console.log("Litenning ", 3001);
})
