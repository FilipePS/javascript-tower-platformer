var express = require('express')
var http = require('http')
var socketio = require('socket.io')

var app = express()
var server = http.createServer(app)
var io = socketio(server)

app.use(express.static('public'))

server.listen(80)
