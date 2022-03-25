const express = require('express')
const router = express.Router()
const   todoModel   =   require('../models/todoModel');


router.get('/', todoModel.getTodos)

router.post ('/', todoModel.saveTodo) 

router.delete ('/:id', todoModel.deleteTodo)

router.patch('/id:', todoModel.updateTodo)

module.exports = router ;