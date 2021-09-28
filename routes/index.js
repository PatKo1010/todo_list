const express = require('express')
const router = express.Router()


//引入路由模組
//引入home, todos模組程式碼
const home = require ('./modules/home')
const todos = require ('./modules/todos')
//將網址結構符合 / 字串的 request 導向 home 模組 
router.use ('/', home)
router.use ('/todos', todos)




//匯出路由器
module.exports = router 