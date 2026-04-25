import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Accessibility({ handleAccessibilityChange, selectedAccessibility }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Accessibility</h1>

    <div>
        <Input
          handleChange={handleAccessibilityChange}
          value="wheelchair"
          title="Wheelchair Accessible"
          name="accessibility"
          checked={selectedAccessibility === "wheelchair"}
        />
        <Input
          handleChange={handleAccessibilityChange}
          value="stairs"
          title="Stairs Required"
          name="accessibility"
          checked={selectedAccessibility === "stairs"}
        />
        <Input
          handleChange={handleAccessibilityChange}
          value="terrain"
          title="Uneven Terrain"
          name="accessibility"
          checked={selectedAccessibility === "terrain"}
        />
    </div>
    </div>
  )
}

export default Accessibility