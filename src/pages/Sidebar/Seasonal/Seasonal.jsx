import React from 'react'
import "./seasonal.css"

const Seasonal = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title seasonal-title'>Seasonal</h2>

      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Winter Activities
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Spring Flowers / Cherry Blossoms
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Summer Festivals
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Autumn Foliage
      </label>
    </div>
  )
}

export default Seasonal