import React from 'react'
import "./duration.css"

const Duration = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title duration-title'>Duration</h2>

      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Half-Day
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Full-Day
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Multi-Day/Overnight
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Flexible/Custom
      </label>
    </div>
  )
}

export default Duration