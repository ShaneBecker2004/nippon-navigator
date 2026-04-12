import React from 'react'
import { useParams } from 'react-router-dom'
import "./tripdetails.css"

const CreatedTrip = () => {
  const { tripId } = useParams();

  console.log("Trip ID from URL:", tripId);

  return (
    <>
        <div>
            <h1>Created Trip</h1>
            <p>Trip ID: {tripId}</p>
        </div>
    </>
  )
}

export default CreatedTrip