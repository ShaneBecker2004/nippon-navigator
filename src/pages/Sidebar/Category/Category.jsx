import React from 'react'
import Input from '../Input'
import "../sidebar.css"

function Category({ handleCategoryChange, selectedCategory }) {
  return (
    <div className='sidebar-section ml'>
      <h1 className='sidebar-title'>Category</h1>

    <div>
        <Input
          handleChange={handleCategoryChange}
          value="food_and_drink"
          title="Food And Drink"
          name="category"
          checked={selectedCategory === "food_and_drink"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="theme_park"
          title="Theme Park"
          name="category"
          checked={selectedCategory === "theme_park"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="park"
          title="Park"
          name="category"
          checked={selectedCategory === "park"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="shopping"
          title="Shopping"
          name="category"
          checked={selectedCategory === "shopping"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="nature"
          title="Nature"
          name="category"
          checked={selectedCategory === "nature"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="family_friendly"
          title="Family-Friendly"
          name="category"
          checked={selectedCategory === "family_friendly"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="festival"
          title="Festival"
          name="category"
          checked={selectedCategory === "festival"}
        />
    </div>

    </div>
  )
}

export default Category