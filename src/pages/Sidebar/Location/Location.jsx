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
          value="Sapporo"
          title="Sapporo"
          name="location"
          checked={selectedLocation === "Sapporo"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Okinawa"
          title="Okinawa"
          name="location"
          checked={selectedLocation === "Okinawa"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Hiroshima"
          title="Hiroshima"
          name="location"
          checked={selectedLocation === "Hiroshima"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Nagoya"
          title="Nagoya"
          name="location"
          checked={selectedLocation === "Nagoya"}
        />
        <Input
          handleChange={handleLocationChange}
          value="Nara"
          title="Nara"
          name="location"
          checked={selectedLocation === "Nara"}
        />
      </div>
    </div>
  )
}

export default Location