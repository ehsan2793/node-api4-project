const express = require('express');
const shortid = require('shortid');
const router = express.Router()

const users = [
    {
        name: 'ehsan',
        password: '1234',
        age: 18,
        email: 'ehsan@gmail.com',
        id: shortid.generate()
    }
]




router.get('/users', (req, res) => {
    res.status(200).json(users)

})


router.post('/register', (req, res) => {
    const newUser = req.body
    newUser.id = shortid.generate()
    users.push(newUser)
    res.status(200).json(users)

})



router.post('/login', (req, res) => {
    let found = users.find(user => user.name === req.body.name)
    if (found) {
        res.status(200).json(found.password)
    } else {
        res.status(403).json({ message: 'did not find user' })
    }

})

module.exports = router