import React from 'react';
import './Loader.scss'
import Lottie from 'react-lottie-player'
import burgerLoader from "./burger-loader.json";
import Typewriter from 'typewriter-effect';

const Loader = () => {
  return (
    <div className="loader">
      <Lottie
      loop
      animationData={burgerLoader}
      play
      style={{ width: 150, height: 150 }}
    />
      <h2>
        <Typewriter
        options={{
          strings: ['Assembling the burgers...'],
          autoStart: true,
          loop: true,
        }}
      /></h2>
    </div>
  )
}

export default Loader
