import { NavLink } from "react-router-dom"
import '../App.css'

const Navbar1 = () => {
  return (
    <div>
      <ul>
        <li><NavLink to='/' className={({isActive}) => isActive ? "active" : ""}> Home </NavLink></li>
        <li><NavLink to='/about' className={({isActive}) => isActive ? "active" : ""}> About </NavLink></li>
        <li><NavLink to='/contact' className={({isActive}) => isActive ? "active" : ""}> Contact </NavLink></li>
        <li><NavLink to='/layout' className={({isActive}) => isActive ? "active" : ""}> Layout </NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar1
