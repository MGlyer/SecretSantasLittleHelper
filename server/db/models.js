const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  secretSantaID: Array,
  givingGiftTo: Object //key will be secretSantaID, value will be ID of person
})

let SecretSantaSchema = mongoose.Schema({
  creatorID: String,
  startDate: String,
  endDate: String,
  invited: Array,
  participating: Array,
  moneyMax: Number,
  multiGift: Boolean
})

let User = mongoose.model('User', UserSchema)
let SecretSantaGame = mongoose.model('SecretSantaGame', SecretSantaSchema)


module.exports = {
  User,
  SecretSantaGame
}