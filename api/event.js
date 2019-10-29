require('dotenv').config()
const request = require('superagent')
const { Event } = require('../database/schemas')

const { API_URL } = process.env

const pollEvent = () => request.get(API_URL)

const saveEvent = data => Event.create(data)

module.exports = {
  pollEvent,
  saveEvent
}
