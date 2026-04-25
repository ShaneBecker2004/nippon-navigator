import React from 'react'
import Category from "./Category/Category"
import Location from "./Location/Location"
import Subcity from './Subcity/Subcity'
import Environment from './Environment/Environment'
import Price from "./Price/Price"
import Rating from "./Rating/Rating"
import Seasonal from './Seasonal/Seasonal'
import Duration from './Duration/Duration'
import Accessibility from './Accessibility/Accessibility'
import Traveler from './Traveler/Traveler'
import './sidebar.css'

function Sidebar({ handleCategoryChange, handleLocationChange, handleSubcityChange, handlePriceChange, handleRatingChange, handleDurationChange, handleEnvironmentChange, handleAccessibilityChange, handleSeasonalChange, handleTravelerChange, selectedLocation, selectedSubcity, subcities }) { 
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container sidebar-title'>
          <h1 className='filter-title'>Filters</h1>
        </div>

        <Category handleCategoryChange={handleCategoryChange} />
        <Location handleLocationChange={handleLocationChange}/>
        <Subcity 
          handleSubcityChange={handleSubcityChange}
          selectedLocation={selectedLocation}
          selectedSubcity={selectedSubcity}
          subcities={subcities}
        />
        <Environment handleEnvironmentChange={handleEnvironmentChange}/>
        <Price handlePriceChange={handlePriceChange}/>
        <Seasonal handleSeasonalChange={handleSeasonalChange}/>
        <Rating handleRatingChange={handleRatingChange}/>
        <Accessibility handleAccessibilityChange={handleAccessibilityChange}/>
        <Duration handleDurationChange={handleDurationChange}/>
        <Traveler handleTravelerChange={handleTravelerChange}/>
    
      </section>
    </>
  )
}

export default Sidebar