require('dotenv').config()

const server = require('./server/server.js');


const port = process.env.PORT || 3000  //eslint-disable-line


server.listen(port, function () {
    console.log(`server is lisening on port ${port}`)
})

