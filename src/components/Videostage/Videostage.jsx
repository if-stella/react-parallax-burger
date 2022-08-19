import React from 'react'
import './Videostage.scss'

const video = [
  'https://res.cloudinary.com/dr24t0rw2/video/upload/v1660906003/Burger/production_ID_4139325_n6w3l6.mp4',
];

const Videostage = () => {
  return (
    <div className="videostage">
      <div className="overlay"></div>
      <div className="videocontent">
        <h2>Yummy yummy fancy burgers</h2>
        <p>Buy them now!</p>
        <button className="btn btn-white">Delivery</button>
      </div>
      <video src={video[0]} autoPlay loop muted alt="burger"/>

    </div>
  )
}

export default Videostage
