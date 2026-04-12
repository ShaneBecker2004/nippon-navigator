import React from 'react'
import "./rating.css"

const Rating = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title rating-title'>Ratings</h2>

      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>⭐4 & up
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>⭐3 & up
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>⭐2 & up
      </label>
    </div>
  )
}

export default Rating