const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./server/routes')

const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

//Middleware:
// to parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }))

// to serve static files
app.use(express.static('public'))

app.use('/', routes)

app.use((request, response) => {
  response.render('common/not_found')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
