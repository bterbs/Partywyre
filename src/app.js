const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const routes = require('./server/routes')

const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

//Middleware:
// to parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// to serve static files
app.use(express.static('public'))

// initialize express-session for login and pages behind authorization
app.use(session({
  key: 'user_id',
  resave: false,
  secret: 'brittany rocks',
  saveUninitialized: false,
  cookie: {
    expires: 60000
  }
}))

app.use('/', routes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
