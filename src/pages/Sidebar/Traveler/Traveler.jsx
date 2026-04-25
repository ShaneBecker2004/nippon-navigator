import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Traveler({ handleTravelerChange, selectedTraveler }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Traveler</h1>

    <div>
        <Input
          handleChange={handleTravelerChange}
          value="family-friendly"
          title="Family-Friendly"
          name="traveler"
          checked={selectedTraveler=== "family-friendly"}
        />
        <Input
          handleChange={handleTravelerChange}
          value="solo-friendly"
          title="Solo-Friendly"
          name="traveler"
          checked={selectedTraveler=== "solo-friendly"}
        />
        <Input
          handleChange={handleTravelerChange}
          value="pet-friendly"
          title="Pet-Friendly"
          name="traveler"
          checked={selectedTraveler=== "pet-friendly"}
        />
    </div>

    </div>
  )
}

export default Traveler