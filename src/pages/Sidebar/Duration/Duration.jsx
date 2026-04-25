import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Duration({ handleDurationChange, selectedDuration }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Duration</h1>

    <div>
        <Input
          handleChange={handleDurationChange}
          value="minutes"
          title="Under 1 Hour"
          name="duration"
          checked={selectedDuration === "minutes"}
        />
        <Input
          handleChange={handleDurationChange}
          value="hour"
          title="1-5 Hours"
          name="duration"
          checked={selectedDuration === "hour"}
        />
        <Input
          handleChange={handleDurationChange}
          value="Half"
          title="Half Day"
          name="duration"
          checked={selectedDuration === "Half"}
        />
        <Input
          handleChange={handleDurationChange}
          value="Full"
          title="Full Day"
          name="duration"
          checked={selectedDuration === "Full"}
        />
    </div>
    </div>
  )
}

export default Duration