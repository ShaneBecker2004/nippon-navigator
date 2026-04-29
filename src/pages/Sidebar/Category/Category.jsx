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
          value="restaurant"
          title="Restaurant"
          name="category"
          checked={selectedCategory === "restaurant"}
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
          value="cafe"
          title="Cafe"
          name="category"
          checked={selectedCategory === "cafe"}
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
          value="festival"
          title="Festival"
          name="category"
          checked={selectedCategory === "festival"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="sightseeing"
          title="Sightseeing"
          name="category"
          checked={selectedCategory === "sightseeing"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="shrine"
          title="Shrine"
          name="category"
          checked={selectedCategory === "shrine"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="castle"
          title="Castle"
          name="category"
          checked={selectedCategory === "castle"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="temple"
          title="Temple"
          name="category"
          checked={selectedCategory === "temple"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="skiing"
          title="Skiing"
          name="category"
          checked={selectedCategory === "skiing"}
        />
        <Input
          handleChange={handleCategoryChange}
          value="landmark"
          title="Landmarks"
          name="category"
          checked={selectedCategory === "landmark"}
        />
    </div>

    </div>
  )
}

export default Category