import React from "react";

function CategoryFilter({categories,clicked}) {
  console.log(categories)
  
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { categories.map(category =>{
        return <button key={category} onClick={(e)=> clicked(category,e)}>{category}</button>
      })}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
