import React from 'react'
import './Footer.scss'
import {BsInstagram} from 'react-icons/bs'
import {FaYelp, FaTripadvisor} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <h3>Our Menu</h3>
          <p>Menu</p>
          <p>Nutritions</p>
          <p>Drinks</p>
          <p>Allergies</p>
        </div>
        <div className="col">
          <h3>Inside BB</h3>
          <p>About us</p>
          <p>Foundation</p>
          <p>Franchising</p>
          <p>Press</p>
        </div>
        <div className="col">
          <h3>Join us!</h3>
          <p>Careers</p>
          <p>Contact</p>
          <p>Social</p>
          <p>Presskit</p>
        </div>
        <div>
          <h3>Let's connect!</h3>
          <div className="social">
            <BsInstagram className="icon"/>
            <FaTripadvisor className="icon" />
            <FaYelp className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
