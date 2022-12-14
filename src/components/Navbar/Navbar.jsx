import React, {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import {ReactComponent as Logo} from '../../assets/Burgerlogo.svg';
import {ReactComponent as Menu} from '../../assets/Burgermenu.svg';
import {Link} from 'react-scroll'


import './Navbar.scss'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 100) {
        setColor(true)
    } else {
        setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
      <div className="container">
        <div>
          <Logo style={{width: '40px', height: '40px'}} className={'navicon'} alt="Burger Logo"/>
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
          <li><Link to="ingredients" smooth={true} duration={500}>Ingredients</Link></li>
          <li><Link to="locations" smooth={true} duration={500}>Locations</Link></li>
          <li><Link to="footer" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? <FaTimes style={{color: 'var(--primary-color-light)', marginRight:'2em'}}/> : <Menu style={{width: '16px', height: '16px'}} className={'navicon'} alt="Burger Menu"/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
