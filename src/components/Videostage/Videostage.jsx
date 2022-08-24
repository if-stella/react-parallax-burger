import React from 'react'
import './Videostage.scss'
import { useMediaPredicate } from "react-media-hook";

const video = [
  'https://res.cloudinary.com/dr24t0rw2/video/upload/v1660906003/Burger/production_ID_4139325_n6w3l6.mp4'
];

const image = [
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661031971/Burger/Frame_9_jumbun.png'
];

const Videostage = () => {
  const moreThan550 = useMediaPredicate("(min-width: 550px)");
  return (
    <div className="videostage">
      <div className="overlay"></div>
      <div className="videocontent">
        <h1>Bouncy Burgers</h1>
        <p>Always fresh & bouncy! Enjoy them delivered to your door or inhouse.</p>
        <button className="btn btn-white">Order  now</button>
      </div>
      {moreThan550 ? <video src={video[0]} autoPlay loop muted playsinline alt="Video showing how a burger is assembled."/> : <img src={image[0]} className="stageimage" alt="Two hands holding a burger."/>}
    </div>
  )
}

export default Videostage
