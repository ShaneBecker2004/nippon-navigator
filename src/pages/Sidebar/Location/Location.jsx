import React from 'react'
import "./location.css"

const Location = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title location-title'>Location</h2>

      <label className='sidebar-label-container'>
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
      </label>
    </div>
  )
}

export default Location