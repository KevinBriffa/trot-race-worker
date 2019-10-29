require('dotenv').config()
const mongoose = require('mongoose')

const { DB_CONNECTION_STRING_DEV } = process.env

mongoose.connect(DB_CONNECTION_STRING_DEV, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB error:'));
db.once('open', () => console.log('Connected to db'))

module.exports = mongoose
