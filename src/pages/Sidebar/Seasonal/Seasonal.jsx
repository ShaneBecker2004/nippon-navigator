import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Seasonal({ handleSeasonalChange, selectedSeasonal }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Seasonal</h1>

    <div>
        <Input
          handleChange={handleSeasonalChange}
          value="winter"
          title="Winter"
          name="seasonal"
          checked={selectedSeasonal === "winter"}
        />
        <Input
          handleChange={handleSeasonalChange}
          value="spring"
          title="Spring"
          name="seasonal"
          checked={selectedSeasonal === "spring"}
        />
        <Input
          handleChange={handleSeasonalChange}
          value="summer"
          title="Summer"
          name="seasonal"
          checked={selectedSeasonal === "summer"}
        />
        <Input
          handleChange={handleSeasonalChange}
          value="fall"
          title="Fall"
          name="seasonal"
          checked={selectedSeasonal === "fall"}
        />
    </div>
    </div>
  )
}

export default Seasonal