import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Rating({ handleRatingChange, selectedRating }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Rating</h1>

    <div>
        <Input
          handleChange={handleRatingChange}
          value="5"
          title="⭐⭐⭐⭐⭐"
          name="rating"
          checked={selectedRating=== "5"}
        />
        <Input
          handleChange={handleRatingChange}
          value="4"
          title="⭐⭐⭐⭐ & up"
          name="rating"
          checked={selectedRating=== "4"}
        />
        <Input
          handleChange={handleRatingChange}
          value="3"
          title="⭐⭐⭐ & up"
          name="rating"
          checked={selectedRating=== "3"}
        />
        <Input
          handleChange={handleRatingChange}
          value="2"
          title="⭐⭐ & up"
          name="rating"
          checked={selectedRating=== "2"}
        />
    </div>
    </div>
  )
}

export default Rating