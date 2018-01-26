const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./server/routes')

const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


// to parse incoming requests
// app.use(express.cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))

// to serve static files
app.use(express.static('public'))

// // to parse incoming requests
// app.use(bodyParser.urlencoded({ extended: false }))


app.use(methodOverride('_method'))

app.use(middlewares.setDefaultResponseLocals)

app.use('/', routes)
// app.use('/contacts', contacts)

app.use((request, response) => {
  response.render('common/not_found')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
