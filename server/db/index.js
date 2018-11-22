const { db } = require('dbConfig.js')

db.once('open', () => {
  console.log('connected to mlab')
})