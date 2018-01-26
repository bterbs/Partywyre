const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Partywyre coming soon!')
})


module.exports = router;
