const express = require('express');

const server = express();

server.use(express.json())

require('dotenv').config()

const useRouter = require('../routers/userRouter');


server.use('/api', useRouter)

server.get('/', (req, res) => {
    res.send("<div><h1>hello wrold</h1><p>welcome to my api to start getting data please  add <strong>/api/users</strong>  to the end of your url</p><p>you can also click this button to take you there</p> <button><a href=/users>click here</a> </button></div>")
})







module.exports = server
