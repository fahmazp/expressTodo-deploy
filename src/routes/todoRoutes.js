const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')
const validateTodo = require('../middlewares/validateTodos')

router.post('/', validateTodo, todoController.createTodo)
router.get('/', todoController.getAllTodos)
router.get('/:id', todoController.getTodoById)
router.put('/:id', validateTodo, todoController.updateTodo)
router.delete('/:id', todoController.deleteById)

module.exports = router