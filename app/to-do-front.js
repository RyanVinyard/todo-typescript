$(document).ready(function(){
  $('#new_task').submit(function(event) {
    event.preventDefault();
    var taskName = $("task_name").val();
    var taskCategory = $("task_category").val();
    console.log(taskName);
    console.log(taskCategory);
  });
});
