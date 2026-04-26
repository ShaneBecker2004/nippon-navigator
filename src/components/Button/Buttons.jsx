import './buttons.css'

function Buttons({ onClickHandler, value, title, selected }) {
  return (
    <label className={`btns ${selected ? "active" : ""}`}>
      <input
        type="radio"
        name="recommended"
        value={value}
        checked={selected}
        onChange={() => onClickHandler(value)}
      />
      {title}
    </label>
  );
}

export default Buttons;