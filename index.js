const { Console, log } = require('console')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require("socket.io") (server,{cors:{origin: "*"}})

app.set('view engine', 'ejs')
app.get('/' , (req,res) =>{

    res.render('home')
})

server.listen(4000, () => {
    console.log("server running");
})


io.on('connection',(socket)=>{
    console.log("user connected..." + socket.id);
    socket.on("message", (data) => {
        socket.broadcast.emit('message', data)
}) 
})