const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
const Todo = require ('./models/todo')


mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on ('error', ()=> {
  console.log (`mongo-db error`)
})
db.once ('open', ()=> {
  console.log (`mongodb connected`)
})

app.engine('hbs', exphbs({defaultLayout:'main' , extname:'.hbs'}))
app.set ('view engine', 'hbs')

app.use (bodyParser.urlencoded({extended: true}))

app.get ('/', (req,res) => {
  Todo.find ()
      .lean ()
      .then (todos => {res.render ('index', {todos:todos})})
      .catch (error => console.error(error))
})

app.get ('/todos/new', (req, res) => {
  res.render ('new')
})

app.post ('/todos', (req,res) => {
  const name = req.body.name
  
  return Todo.create ({name})
  .then (() => res.redirect('/'))
  .catch (error => console.log (error))

})


app.listen (port, () => {
  console.log (`The Express server is running on http://localhost:${port}`)
})