import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import '../App.css'

const Navbar = () => {

    const location = useLocation();
  return (
    <div>
      <ul>
        <li><Link to='/' className={location.pathname === '/' ? 'active' : ""}> Home </Link></li>
        <li><Link to='/about' className={location.pathname === '/about' ? 'active' : ""}> About </Link></li>
        <li><Link to='/contact' className={location.pathname === '/contact' ? 'active' : ""}> Contact </Link></li>
        <li><Link to='/layout' className={location.pathname === '/layout' ? 'active' : ""}> Layout </Link></li>
      </ul>
    </div>
  )
}

export default Navbar
