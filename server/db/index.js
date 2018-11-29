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

//may switch the secret santa groups over to another, SQL db
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
  newGroup.save((err, docs) => {
    if (err) {
      console.log('in db: ', err)
      cb(err)
    }
    else {
      console.log('successful save', docs)
      cb(null, docs)
    }
  })
}

module.exports = {
  signUp,
  createNewSecretSantaGroup
}