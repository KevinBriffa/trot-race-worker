require('./database/config')
const { pollEvent, saveEvent } = require('./api/event');

// run anonymous function with an inifinite loop that polls the event api
(async () => {
  while (1) {
    try {
      const { body, status } = await pollEvent()
      if (status === 200) {
        await saveEvent(body)
      }
    } catch (err) {
      console.error(err)
    }
  }
})()
