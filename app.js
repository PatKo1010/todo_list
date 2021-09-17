const express = require('express')
const app = express()
const port = 3000
const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on ('error', ()=> {
  console.log (`mongo-db error`)
})
db.once ('open', ()=> {
  console.log (`mongodb connected`)
})

app.get ('/', (req,res) => {
  res.send (`Hello world`)
})


app.listen (port, () => {
  console.log (`The Express server is running on http://localhost:${port}`)
})