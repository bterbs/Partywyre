const sessionChecker = (req, res, next) => {
  if (!(req.session.email && req.cookies.user_id)) {
    res.redirect('/login')
  } else {
    next()
  }
}

module.exports = {
  sessionChecker
}
