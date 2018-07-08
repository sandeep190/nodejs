var async = require('async');

// ..

if(result.tasks) {
  async.forEach(result.tasks, processEachTask, afterAllTasks);

  function processEachTask(task, callback) {
    console.log(task);
    common.findOne('tasks', {'taskId':parseInt(task)}, function(err,res) {
      tArr.push(res); // NOTE: Assuming order does not matter here
      console.log(res);
      callback(err);
    });
  }

  function afterAllTasks(err) {
    console.log(tArr);
  }
}