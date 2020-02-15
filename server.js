// https://www.youtube.com/watch?v=-Y_3FUmK33A

const express = require('express')
const app = express()
const http = require('http')
const socketIO = require('socket.io')

const server = http.Server(app)
server.listen(5000, () => {
    console.log('http://192.168.0.18:5000');
    
})

const io = socketIO(server)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

const getUser = require('./lib/getUser')
// const loginUser = require('./lib/loginUser')
const createUser = require('./lib/createUser')
const authenticationUser = require('./lib/authenticateUser')


global.userSessions = {}

io.on('connection', function (socket) {

    // Get the authenticated user
    socket.on('user.get', function (token) {
        getUser(socket, token)
    })

    // Create a new user
    socket.on('user.create', function (data) {
        console.log('user.create')
        createUser(socket, data)
    })

    // Login
    socket.on('user.login', function (data) {
        console.log('user.login')
        authenticationUser(socket, data)
    })

    // Log the authenticated user out
    socket.on('user.logout', function (token) {
        console.log('user.logout')
        delete userSessions[token]
    })
})