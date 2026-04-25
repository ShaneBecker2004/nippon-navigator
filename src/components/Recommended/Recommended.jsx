import "./recommended.css"
import Buttons from "../Button/Buttons"

function Recommended({ handleClick }) {
  return (
    <>
        <div>
            <h2 className='recommended-title fw-bold fs-3 mt-3'>Recommended</h2>
            <div className='recommended-flex'>
              <Buttons onClickHandler={handleClick} value="" title="All Activities"/>
              <Buttons onClickHandler={handleClick} value="local" title="Top Rated"/>
              <Buttons onClickHandler={handleClick} value="popular" title="Popular"/>
              <Buttons onClickHandler={handleClick} value="must_do" title="Must-Do"/>
              <Buttons onClickHandler={handleClick} value="hidden" title="Hidden Gems"/>
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