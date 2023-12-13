const Todo = require('./toDo-List'); 
const todoList = new Todo();

todoList.add("Buy groceries");
todoList.add("Read a book");
todoList.add("Go for a run");

const allTodos = todoList.getAll();
console.log("All Todos:", allTodos);

todoList.update(1, "Read two books");
const specificTodo = todoList.get(1);
console.log("Todo at index 1:", specificTodo);

todoList.remove(0);
const updatedTodos = todoList.getAll();
console.log("Updated Todos:", updatedTodos);

todoList.clear();
const clearedTodos = todoList.getAll();
console.log("Cleared Todos:", clearedTodos);
