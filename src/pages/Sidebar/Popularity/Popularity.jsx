import React from 'react'
import "./popularity.css"

const Popularity = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title popularity-title'>Popularity</h2>
      
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Most Booked
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Local Favorites
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test2"/>
        <span className='checkmark'></span>Hidden Gems
      </label>
      </div>
  )
}

export default Popularity