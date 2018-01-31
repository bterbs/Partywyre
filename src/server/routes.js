const router = require('express').Router();
const doesPasswordExist = require('../model/db/events.js')

router.get('/', (req, res, next) => {
  return res.render('events/index.ejs')
})

router.post('/', (req, res, next) => {
  const password = req.body.password
  doesPasswordExist(password)
    .then((event) => {
      console.log(event);
    })
    .catch(console.error)
})

module.exports = router;
