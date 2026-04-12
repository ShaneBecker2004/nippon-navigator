import React from 'react'
import "./accessibility.css"

const Accessibility = () => {
  return (
    <div className='ml'>
        <h2 className='sidebar-title accessibility-title'>Accessibility</h2>
        
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Wheelchair Accessibility
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Pet-Friendly
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Family-Friendly
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Language Support
      </label>
    </div>
  )
}

export default Accessibility