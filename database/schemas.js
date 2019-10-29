const mongoose = require('mongoose')

const { Schema, model } = mongoose

const eventSchema = new Schema({
  event: String,
  horse: {
    id: Number,
    horse: String
  },
  time: Number
})

const Event = model('events', eventSchema)

module.exports = {
  Event
}
