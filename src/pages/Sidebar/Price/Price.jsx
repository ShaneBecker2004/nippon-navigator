import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Price({ handlePriceChange }) {
  return (
    <div className='sidebar-section ml'>
      <h2 className='sidebar-title'>Price</h2>
    <div>
      <label className='sidebar-label-container'>
        <input onChange={handlePriceChange} type='radio' value="" name="test2" />
        <span className='checkmark'></span>
        All
      </label>

      <Input 
        handleChange={handlePriceChange}
        value={2500}
        title="Free - ¥2,500"
        name="test2"
      />
      <Input 
        handleChange={handlePriceChange}
        value={5000}
        title="¥2,500 - ¥5,000"
        name="test2"
      />
      <Input 
        handleChange={handlePriceChange}
        value={10000}
        title="¥5,000 - ¥10,000"
        name="test2"
      />
      <Input 
        handleChange={handlePriceChange}
        value={15000}
        title="¥10,000 or above"
        name="test2"
      />
    </div>
    </div>
  )
}

export default Price