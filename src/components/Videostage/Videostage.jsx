import React from 'react'
import './Videostage.scss'
import { useMediaPredicate } from "react-media-hook";
import {ReactComponent as TextIllu} from '../../assets/Burgerintro.svg';

const video = [
  'https://res.cloudinary.com/dhrtgukmg/video/upload/v1662393486/Bouncy%20Burgers/production_ID_4139325_n6w3l6_pys3yv.mp4'
];

const image = [
  'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393930/Bouncy%20Burgers/Frame_16_dnpt5f_pdwrhd.png'
];

const Videostage = () => {
  const moreThan550 = useMediaPredicate("(min-width: 550px)");
  return (
    <div className="videostage" name='home'>
      <div className="overlay"></div>
      <div className="videocontent">
        <TextIllu className={'bb-intro-illu'} alt="Bouncy Burgers Intro Illustration"/>

        <p>Always fresh & bouncy! Enjoy them delivered to your door or inhouse.</p>
        <button className="btn btn-white">Order  now</button>
      </div>
      {moreThan550 ? <video src={video[0]} autoPlay loop muted playsInline alt="Video showing how a burger is assembled."/> : <img src={image[0]} className="stageimage" alt="Two hands holding a burger."/>}
    </div>
  )
}

export default Videostage
