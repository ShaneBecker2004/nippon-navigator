import './sidebar.css'

function Input({ handleChange, value, title, name, color, checked }) {
  return (
      <label className='sidebar-label-container'>
          <input 
          onChange={handleChange} 
          type='checkbox' 
          value={value} 
          name={name} 
          checked={checked}
          />
          <span className='checkmark' style={{ backgroundColor: checked ? color : "#eee" }} />
          {title}
      </label>
  )
}

export default Input