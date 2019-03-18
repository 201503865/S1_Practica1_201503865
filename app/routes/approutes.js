module.exports = function(app) {
  var todoList = require('../controller/appController.js');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
 app.route('/subirimagen')
    .post(todoList.subir_imagen);
   };
