import "./recommended.css"
import Buttons from "../Button/Buttons"

function Recommended({ handleClick }) {
  return (
    <>
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-flex'>
              <Buttons onClickHandler={handleClick} value="" title="All Activities"/>
              <Buttons onClickHandler={handleClick} value="local" title="Local"/>
              <Buttons onClickHandler={handleClick} value="food_and_drink" title="Food And Drink"/>
              <Buttons onClickHandler={handleClick} value="entertainment" title="Entertainment"/>
                {/* <button className='btns'>Local</button>
                <button className='btns'>Shopping</button>
                <button className='btns'>Entertainment</button>
                <button className='btns'>Kid-Friendly</button> */}
            </div>
        </div>
    </>
  )
}

export default Recommended