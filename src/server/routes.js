const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.render('events/index.ejs')
})


module.exports = router;
