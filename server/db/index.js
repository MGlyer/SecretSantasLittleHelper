const { db } = require('./dbConfig')
const { User, SecretSantaGame } = require('./models')

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

const createNewSecretSantaGroup = (info, cb) => {
  let newGroup = new SecretSantaGame ({
  creatorID: null,
  startDay: info.startDay,
  exchangeDay: info.exchangeDay,
  invited: [],
  participating: [],
  moneyMax: info.moneyMax,
  multiGift: info.multiGift
  })
  newGroup.save()
  cb(null)
}

module.exports = {
  signUp,
  createNewSecretSantaGroup
}