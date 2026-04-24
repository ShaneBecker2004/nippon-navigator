import React from 'react'
import Category from "./Category/Category"
import Location from "./Location/Location"

import Price from "./Price/Price"
import Rating from "./Rating/Rating"

import './sidebar.css'

function Sidebar({ handleCategoryChange, handleLocationChange, handlePriceChange, handleRatingChange }) {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container sidebar-title'>
          <h1 className='filter-title'>Filters</h1>
        </div>

        <Category handleCategoryChange={handleCategoryChange} />
        <Location handleLocationChange={handleLocationChange}/>
        {/* <Popularity handleCategoryChange={handleCategoryChange}/> */}
        <Price handlePriceChange={handlePriceChange}/>
        <Rating handleRatingChange={handleRatingChange}/>
        {/* <Seasonal handleCategoryChange={handleCategoryChange}/> */}
        
      </section>
    </>
  )
}

export default Sidebar