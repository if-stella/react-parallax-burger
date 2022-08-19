import React, {useState} from 'react'
import {FaHamburger, FaBars, FaTimes} from 'react-icons/fa'

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
          <FaHamburger size={40} style={{marginLeft: '1em'}} className={'navicon'}/>
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Delivery</li>
          <li>Contact</li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? <FaTimes style={{color: 'var(--primary-color-light)', marginRight:'1em'}}/> : <FaBars style={{ marginRight:'1em'}} className={'navicon'}/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
