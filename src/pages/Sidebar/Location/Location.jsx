import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Location ({ handleLocationChange, selectedLocation }) {
  return (
    <div className='sidebar-section ml'>
      <h2 className='sidebar-title'>Location</h2>

      <div> 
        <Input
          handleChange={handleLocationChange}
          value="tokyo"
          title="Tokyo"
          name="location"
          checked={selectedLocation === "tokyo"}
        />
        <Input
          handleChange={handleLocationChange}
          value="osaka"
          title="Osaka"
          name="location"
          checked={selectedLocation === "osaka"}
        />
        <Input
          handleChange={handleLocationChange}
          value="kyoto"
          title="Kyoto"
          name="location"
          checked={selectedLocation === "kyoto"}
        />
        <Input
          handleChange={handleLocationChange}
          value="fukuoka"
          title="Fukuoka"
          name="location"
          checked={selectedLocation === "fukuoka"}
        />
        <Input
          handleChange={handleLocationChange}
          value="yokohama"
          title="Yokohama"
          name="location"
          checked={selectedLocation === "yokohama"}
        />
        <Input
          handleChange={handleLocationChange}
          value="hokkaido"
          title="Hokkaido"
          name="location"
          checked={selectedLocation === "hokkaido"}
        />
        <Input
          handleChange={handleLocationChange}
          value="okinawa"
          title="Okinawa"
          name="location"
          checked={selectedLocation === "okinawa"}
        />
      </div>
    </div>
  )
}

export default Location