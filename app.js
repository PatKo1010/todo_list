const express = require('express')
const port = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require ('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()


app.engine('hbs', exphbs({defaultLayout:'main' , extname:'.hbs'}))
app.set ('view engine', 'hbs')

app.use (bodyParser.urlencoded({extended: true}))
app.use (methodOverride('_method'))
app.use (routes)


app.listen (port, () => {
  console.log (`The Express server is running on http://localhost:${port}`)
})


