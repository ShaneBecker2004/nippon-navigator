import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Location ({ handleLocationChange}) {
  return (
    <div className='sidebar-section ml'>
      <h2 className='sidebar-title'>Location</h2>

      <div> 
        <label className='sidebar-label-container'>
        <input onChange={handleLocationChange} type='radio' value="" name="test3" />
        <span className='checkmark'></span>All
      </label>

      <Input 
      handleChange={handleLocationChange}
      value="tokyo"
      title="Tokyo"
      name="test3"
      />
      <Input 
      handleChange={handleLocationChange}
      value="osaka"
      title="Osaka"
      name="test3"
      />
      {/* <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Tokyo
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Osaka
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Kyoto
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Fukuoka
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Yokohama
      </label> */}
      </div>
    </div>
  )
}

export default Location