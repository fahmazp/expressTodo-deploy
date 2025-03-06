const validateTodo = (req, res, next) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).send('Task is required');
    }
    next();
}

module.exports = validateTodo;