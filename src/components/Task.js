import React from "react";

function Task({text,category,task,deleteTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>deleteTask(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
