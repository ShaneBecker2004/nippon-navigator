import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Environment({ handleEnvironmentChange, selectedEnvironment }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Environment</h1>

    <div>
        <Input
          handleChange={handleEnvironmentChange}
          value="indoor"
          title="Indoor"
          name="environment"
          checked={selectedEnvironment === "indoor"}
        />
        <Input
          handleChange={handleEnvironmentChange}
          value="outdoor"
          title="Outdoor"
          name="environment"
          checked={selectedEnvironment === "outdoor"}
        />
        <Input
          handleChange={handleEnvironmentChange}
          value="mixed"
          title="Mixed"
          name="environment"
          checked={selectedEnvironment === "mixed"}
        />
      </div>
      </div>
  )
}

export default Environment