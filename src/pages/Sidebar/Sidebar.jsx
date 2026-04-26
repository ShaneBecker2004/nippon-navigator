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

function Sidebar({
  handleCategoryChange,
  handleLocationChange,
  handleSubcityChange,
  handlePriceChange,
  handleRatingChange,
  handleDurationChange,
  handleEnvironmentChange,
  handleAccessibilityChange,
  handleSeasonalChange,
  handleTravelerChange,

  selectedCategory,
  selectedLocation,
  selectedSubcity,
  selectedPrice,
  selectedRating,
  selectedDuration,
  selectedEnvironment,
  selectedAccessibility,
  selectedSeasonal,
  selectedTraveler,

  subcities
}) {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container sidebar-title'>
          <h1 className='filter-title'>Filters</h1>
        </div>

        <Category handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        <Location handleLocationChange={handleLocationChange} selectedLocation={selectedLocation} />
        <Subcity
          handleSubcityChange={handleSubcityChange}
          selectedLocation={selectedLocation}
          selectedSubcity={selectedSubcity}
          subcities={subcities}
        />
        <Environment handleEnvironmentChange={handleEnvironmentChange} selectedEnvironment={selectedEnvironment} />
        <Price handlePriceChange={handlePriceChange} selectedPrice={selectedPrice} />
        <Seasonal handleSeasonalChange={handleSeasonalChange} selectedSeasonal={selectedSeasonal} />
        <Rating handleRatingChange={handleRatingChange} selectedRating={selectedRating} />
        <Accessibility handleAccessibilityChange={handleAccessibilityChange} selectedAccessibility={selectedAccessibility} />
        <Duration handleDurationChange={handleDurationChange} selectedDuration={selectedDuration} />
        <Traveler handleTravelerChange={handleTravelerChange} selectedTraveler={selectedTraveler} />

      </section>
    </>
  )
}

export default Sidebar