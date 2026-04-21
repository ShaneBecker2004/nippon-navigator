import React from 'react'
import "../sidebar.css"

const Rating = () => {
  return (
    <div className='sidebar-section ml'>
      <h2 className='sidebar-title'>Ratings</h2>

      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>⭐⭐⭐⭐⭐
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>⭐⭐⭐⭐
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>⭐⭐⭐
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>⭐⭐
      </label>
    </div>
  )
}

export default Rating