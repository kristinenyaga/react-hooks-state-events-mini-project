import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  let newArr = categories.filter(cat => cat !== "All")

  const[formData,setFormData]=useState({
    text:"",
    category:""
  })

  function handleChange(event){
    setFormData({
      ...formData,[event.target.name]:event.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit(formData)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" 
        value={formData.text}
        onChange={handleChange}/>
        
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {newArr.map(category =>{
            return <option key={category}>{category}</option>

          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
