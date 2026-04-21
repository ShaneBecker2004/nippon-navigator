import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Category({ handleCategoryChange }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Category</h1>

    <div>
      <label className='sidebar-label-container'>
        <input onChange={handleCategoryChange} type='radio' value="" name="test" />
        <span className='checkmark'></span>All
      </label>

        <Input
          handleChange={handleCategoryChange}
          value="food_and_drink"
          title="Food And Drink"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="theme_park"
          title="Theme Park"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="park"
          title="Park"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="shopping"
          title="Shopping"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="nature"
          title="Nature"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="family_friendly"
          title="Family-Friendly"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="festival"
          title="Festival"
          name="test"
        />

      {/* <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Food & Drink
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Entertainment
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Adventure
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Culture & History
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Relaxation & Wellness
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name="test"/>
        <span className='checkmark'></span>Family-Friendly
      </label> */}
    </div>

    </div>
  )
}

export default Category