import React from 'react'
import "./recommended.css"

const Recommended = () => {
  return (
    <>
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-flex'>
                <button className='btns'>All Activities</button>
                <button className='btns'>Local</button>
                <button className='btns'>Shopping</button>
                <button className='btns'>Entertainment</button>
                <button className='btns'>Kid-Friendly</button>
            </div>
        </div>
    </>
  )
}

export default Recommended