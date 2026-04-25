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
          value="Tokyo"
          title="Tokyo"
          name="location"
          checked={selectedLocation === "Tokyo"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Osaka"
          title="Osaka"
          name="location"
          checked={selectedLocation === "Osaka"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Kyoto"
          title="Kyoto"
          name="location"
          checked={selectedLocation === "Kyoto"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Fukuoka"
          title="Fukuoka"
          name="location"
          checked={selectedLocation === "Fukuoka"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Yokohama"
          title="Yokohama"
          name="location"
          checked={selectedLocation === "Yokohama"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Hokkaido"
          title="Hokkaido"
          name="location"
          checked={selectedLocation === "Hokkaido"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Okinawa"
          title="Okinawa"
          name="location"
          checked={selectedLocation === "Okinawa"}
        />
      </div>
    </div>
  )
}

export default Location