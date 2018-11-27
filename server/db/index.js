const { db } = require('./dbConfig')
const { User } = require('./models')

db.once('open', () => {
  console.log('connected to mlab')
})

const signUp = (user) => {
  let newUser = new User ({
    name: user.name,
    password: user.password,
    email: user.email,
    secretSantaID: [],
    givingGiftTo: {}
  }).save()
}

module.exports = {
  signUp
}