const todos = [];
let currentId = 1;

// create new todo
exports.createTodo = (req, res) => {
  const { task } = req.body;
  const newTodo = { id: currentId++, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// get all todos
exports.getAllTodos = (req, res) => {
  res.json(todos);
};

// get todo by ID
exports.getTodoById = (req, res) => {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
  
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
  
    res.json(todo);
};

// update a todo by id
exports.updateTodo = (req, res) => {
  const todo = todos.find((t) => {
    return t.id === parseInt(req.params.id);
  });
  if (!todo) {
    return res.status(404).send("Todo not found");
  }

  const { task } = req.body;

  if (task) {
    todo.task = task;
  }

  res.json(todo);
};

// delete a todo by id
exports.deleteById = (req, res) => {
  const index = todos.findIndex((t) => {
    return t.id === parseInt(req.params.id);
  });
  if (index === -1) {
    return res.status(404).send("Todo not found");
  }

  todos.splice(index, 1);
  res.status(204).send();
};