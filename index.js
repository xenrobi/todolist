const command = process.argv[2];
const param = process.argv.slice(3);
const TodoController = require('./controller/TodoController');

switch (command) {
  case 'show':
    TodoController.show();
    break;
  case 'add':
    TodoController.add(param);
    break;
  case 'update':
    TodoController.update(param);
    break;
  case 'delete':
    TodoController.delete(param);
    break;

  default:
    TodoController.message('MASUKAN COMMAND YANG BENAR');
    break;
}
