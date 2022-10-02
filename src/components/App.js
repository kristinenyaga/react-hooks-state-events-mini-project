import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = React.useState(TASKS);
  const categories = CATEGORIES

  function deleteTask(taskreturned){
    console.log(taskreturned)
    const newTasks= tasks.filter(task => task.text !== taskreturned.text )
    setTask(newTasks)
  }

  function clicked(returnedcategory,e){
    e.target.className="selected"
    console.log(e,returnedcategory)
    const filteredTasks= tasks.filter( task => {
      if(returnedcategory === "All") return true
      return task.category === returnedcategory
    })
   setTask(filteredTasks)
  }

  function onTaskFormSubmit(newItem){
    setTask([...tasks,newItem])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} clicked={clicked}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
