import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Subcity({ handleSubcityChange, selectedSubcity }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Subcity</h1>

    <div>
        <Input
          handleChange={handleSubcityChange}
          value="Shibuya"
          title="Shibuya"
          name="subcity"
          checked={selectedSubcity === "Shibuya"}
        />
        <Input
          handleChange={handleSubcityChange}
          value="Shinjuku"
          title="Shinjuku"
          name="subcity"
          checked={selectedSubcity === "Shinjuku"}
        />
        <Input
          handleChange={handleSubcityChange}
          value="Namba"
          title="Namba"
          name="subcity"
          checked={selectedSubcity === "Namba"}
        />
        <Input
          handleChange={handleSubcityChange}
          value="Sapporo"
          title="Sapporo"
          name="subcity"
          checked={selectedSubcity === "Sapporo"}
        />
    </div>
    </div>
  )
}

export default Subcity