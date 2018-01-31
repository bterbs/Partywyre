const router = require('express').Router();
const doesPasswordExist = require('../model/db/events.js')

router.get('/', (req, res, next) => {
  return res.render('events/index.ejs')
})

router.post('/', (req, res, next) => {
  const password = req.body.password
  doesPasswordExist(password)
    .then((event) => {
      console.log(`the party location is ${event.event_location}`)
      return res.render('events/eventRabbit.ejs', {})
    })
    .catch(console.error)
})

module.exports = router;
