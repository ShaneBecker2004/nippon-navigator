import React from 'react'
import Category from "./Category/Category"
import Location from "./Location/Location"
import Popularity from "./Popularity/Popularity"
import Price from "./Price/Price"
import Rating from "./Rating/Rating"
import Seasonal from "./Seasonal/Seasonal"
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container'>
          <h1>Filters</h1>
        </div>

        <Category />
        <Location />
        <Popularity />
        <Price />
        <Rating />
        <Seasonal />
        
      </section>
    </>
  )
}

export default Sidebar