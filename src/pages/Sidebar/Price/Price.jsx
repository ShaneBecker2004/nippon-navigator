import React from 'react'
import "./price.css"

const Price = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>$0 - $25
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>$25 - $50
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>$50 - $75
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>$75 - $100
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Over $100
      </label>
    </div>
  )
}

export default Price