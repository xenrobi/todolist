const Todo = require('../model/todo');
const TodoView = require('../view/TodoView');

class TodoController {
  static show() {
    let todos = Todo.show();
    TodoView.show(todos);
  }
  static add(todo) {
    Todo.add(todo);
  }
  static delete(todo) {
    Todo.delete(todo);
  }
  static update(todo) {
    Todo.update(todo);
  }

  static message(msg) {
    TodoView.message(msg);
  }
}
module.exports = TodoController;
