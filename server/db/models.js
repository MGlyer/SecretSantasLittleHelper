const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  name: String,
  password: String,
  secretSantaID: Array
})

let SecretSantaSchema = mongoose.Schema({
  ID: String,
  startDate: String,
  endDate: String
})

let User = mongoose.model('User', UserSchema)


module.exports = {
  User
}