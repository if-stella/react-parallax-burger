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
        <h1>Bouncy Burgers</h1>
        <p>Always fresh & bouncy! Enjoy them delivered to your door or inhouse.</p>
        <button className="btn btn-white">Order  now</button>
      </div>
      <video src={video[0]} autoPlay loop muted alt="burger"/>
    </div>
  )
}

export default Videostage
