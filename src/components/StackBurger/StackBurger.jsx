import React from 'react'
import './StackBurger.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const images = [
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1660813857/Burger/b01-topbun_a3ky6x.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1660813857/Burger/b02-onions_dyxqmr.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1660813857/Burger/b03-tomatoes_wjrblp.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1660813857/Burger/b04-patty_fw0qzu.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661087423/Burger/berger_9_h3cbrq.png',
 ];

const StackBurger = () => {
  return (
    <div className="stack-container">
      <div className="parallax-container">
      <Parallax pages={2}>
        <ParallaxLayer sticky={true}><h2>Only the best!</h2><p>We strive to elevate the burger experience to its top shelf – because you and your burger deserve better. We like them medium rare with a nice pink center and juices running down your arm, but you have it as you like it. We like them with a few premium toppings that are there for a reason.</p></ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={1} id={'topbun'}><img src={images[0]} alt="Burger bun top"/></ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={2} id={'onions'}><img src={images[1]} alt="onions"/></ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={3} id={'tomatoes'}><img src={images[2]} alt="tomatoes" id="tomatoes"/></ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={4} id={'patty'}><img src={images[3]} alt="patty" id="patty"/></ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={5} id={'bottombun'}><img src={images[4]} alt="Burger bun bottom" id="bottomBun"/></ParallaxLayer>
      </Parallax>
      </div>
    </div>
  )
}

export default StackBurger
