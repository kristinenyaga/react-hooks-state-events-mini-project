import React from "react";
import Task from "./Task"

function TaskList({tasks,deleteTask}) {
  let tasksList = tasks.map((task, index) =>
    <Task
      task={task}
      key={index}
      text={task.text}
      deleteTask={deleteTask}
      category={task.category}
    />)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksList}
    </div>
  );
}

export default TaskList;
