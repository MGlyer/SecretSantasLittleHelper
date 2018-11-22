const express = require('express')
const server = express()

//MIDDLEWARE SECTION
const parser = require('body-parser')

server.use(parser.json())
server.use(express.static(__dirname + '/../dist'))

//METHOD IMPORTS
const { signUp } = require('./db/index')

//METHOD USE
server.post('/user/signup', (req, res) => {
  let user = req.body
  signUp(user)
  res.send('successfuly posted user')
})



//BOOT SERVER
const port = 8085
server.listen(port, () => console.log(`now listening on port ${port}`) )