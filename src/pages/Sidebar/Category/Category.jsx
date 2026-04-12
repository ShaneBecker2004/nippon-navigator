import React from 'react'
import "./category.css"

const Category = () => {
  return (
    <div>
      <h1 className='sidebar-title'>Category</h1>

    <div>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Food & Drink
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Entertainment
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Adventure
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Culture & History
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Relaxation & Wellness
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Family-Friendly
      </label>
    </div>

    </div>
  )
}

export default Category