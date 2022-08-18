import React, {useState} from 'react'
import {FaHamburger, FaBars, FaTimes} from 'react-icons/fa'

import './Navbar.scss'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (
    <div className="navbar">
      <div className="container">
        <div>
          <FaHamburger size={40} style={{marginLeft: '1em', color:'#141223'}}/>
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Delivery</li>
          <li>Contact</li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? <FaTimes style={{color: 'var(--primary-color-light)', marginRight:'1em'}}/> : <FaBars style={{color: 'var(--primary-color)', marginRight:'1em'}}/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
