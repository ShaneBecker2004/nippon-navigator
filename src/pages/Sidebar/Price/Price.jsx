import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Price({ handlePriceChange, selectedPrice }) {
  return (
    <div className='sidebar-section ml'>
      <h2 className='sidebar-title'>Price</h2>
    <div>
      <Input 
        handleChange={handlePriceChange}
        value={2500}
        title="Free - ¥2,500"
        name="price"
        checked={selectedPrice === [2500]}
      />
      <Input 
        handleChange={handlePriceChange}
        value={5000}
        title="Free - ¥5,000"
        name="price"
        checked={selectedPrice === [5000]}
      />
      <Input 
        handleChange={handlePriceChange}
        value={10000}
        title="Free - ¥10,000 & up"
        name="price"
        checked={selectedPrice === [15000]}
      />
    </div>
    </div>
  )
}

export default Price