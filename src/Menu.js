import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className="Menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/boots">Boots</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu
