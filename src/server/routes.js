const router = require('express').Router();
const { doesPasswordExist, addEvent } = require('../model/db/events.js')

router.get('/', (req, res, next) => {
  return res.render('events/index.ejs', {message:'There\'s a party tonight!'})
})

router.post('/', (req, res, next) => {
  const password = req.body.password
  doesPasswordExist(password)
    .then((event) => {
      if (!event) {
        res.render('events/index.ejs', { message: 'Sorry, were you invited? Try again.'})
      } else {
        console.log(`the party location is ${event.event_location}`)
        return res.render('events/eventRabbit.ejs', {time: event.event_time, location: event.event_location, artists: event.event_artists})
      }
    })
    .catch(console.error)
})

router.get('/login', (req, res, next) =>{
  res.render('events/login')
})

router.post('/login', (req, res) => {
  const {username, password} = req.body
})

router.get('/new', (req, res, next) => {
  return res.render('events/newEvent.ejs')
})

router.post('/new', (req, res, next) => {
  const {password, time, location, artists} = req.body
  addEvent(password, time, location, artists)
    .then((event) => {
      return res.render('events/thankyou.ejs', {password: event.event_password})
    })
})

router.get('/thankyou', (req, res, next) => {
  return res.render('events/thankyou', {password: ""})
})

module.exports = router;
