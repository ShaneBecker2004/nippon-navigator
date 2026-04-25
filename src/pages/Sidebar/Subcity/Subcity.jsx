import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Subcity({ handleSubcityChange, selectedSubcity, selectedLocation, subcities = [] }) {

  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Subcity</h1>

    <div>
        {!selectedLocation ? (
          <p>Select a city first</p>
        ) : subcities.length === 0 ? (
          <p>No subcities found</p>
        ) : (
          subcities.map((city) => (
            <Input
              key={city}
              handleChange={handleSubcityChange}
              value={city}
              title={city}
              name="subcity"
              checked={selectedSubcity === city}
            />
          ))
        )}
    </div>
    </div>
  )
}

export default Subcity