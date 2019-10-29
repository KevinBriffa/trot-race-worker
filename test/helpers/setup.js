require('dotenv').config()
const mongoose = require('mongoose')

const { DB_CONNECTION_STRING_TEST } = process.env

const setupDb = done => {
  mongoose.connect(DB_CONNECTION_STRING_TEST, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDB error:'))
  db.once('open', () => {
    done()
  })
}

const dropDb = done => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(done)
  })
}

module.exports = {
  setupDb,
  dropDb
}
