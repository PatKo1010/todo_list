const express = require ('express')
const router = express.Router ()

const Todo = require('../../models/todo')

//定義首頁入由
router.get('/', (req, res) => {
  Todo.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(todos => { res.render('index', { todos: todos }) })
    .catch(error => console.error(error))
})

//匯出路由模組
module.exports = router
