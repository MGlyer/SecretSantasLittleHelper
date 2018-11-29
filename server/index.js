const express = require('express')
const server = express()

//MIDDLEWARE SECTION
const parser = require('body-parser')

server.use(parser.json())
server.use(express.static(__dirname + '/../dist'))

//METHOD IMPORTS
const { signUp, createNewSecretSantaGroup, saveInitialInvitesToGroup } = require('./db/index')

//METHOD USE
server.post('/users/signup', (req, res) => {
  let user = req.body
  signUp(user)
  res.send('successfuly posted user')
})

server.post('/newSecretSantaGroup/basicInfo', (req, res) => {
  let info = req.body
  console.log('in server: ', info)
  createNewSecretSantaGroup(info, (err, result) => {
    if (err) {
      console.log('post save to db', err)
      res.send('error')
    }
    else res.send(result)
  })
})

server.post('/newSecretSantaGroup/initialInvites', (req, res) => {
  let info = req.body
  console.log('in server, initialInvites: ', info)
  saveInitialInvitesToGroup(info)
  res.send(info)
})



//BOOT SERVER
const port = 8085
server.listen(port, () => console.log(`now listening on port ${port}`) )