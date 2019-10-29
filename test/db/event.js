const chai = require('chai')
const { Event } = require('../../database/schemas')
const { saveEvent } = require('../../api/event')
const { setupDb, dropDb } = require('../helpers/setup')

const { expect } = chai

const eventStart = {
  event: 'start',
  horse: {
    id: 1,
    horse: 'Lightning'
  },
  time: 0
}

const eventFinish = {
  event: 'finish',
  horse: {
    id: 1,
    horse: 'Lightning'
  },
  time: 12313
}

describe('Test MongoDB integration', () => {
  before(done => setupDb(done))
  after(done => dropDb(done))

  it('Should save documents to database', async () => {
    await saveEvent(eventStart)
    await saveEvent(eventFinish)
  })

  it('Should find documents in database', async () => {
    const events = await Event.find({ event: 'start' })

    expect(events.length).to.equal(1)
    expect(events[0].horse.id).to.equal(1)
  })
})
