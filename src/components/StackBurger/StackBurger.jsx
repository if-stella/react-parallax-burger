import React from 'react'
import './StackBurger.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useMediaPredicate } from "react-media-hook";

const images = [
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1660813857/Burger/b01-topbun_a3ky6x.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1660813857/Burger/b02-onions_dyxqmr.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1660813857/Burger/b03-tomatoes_wjrblp.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1660813857/Burger/b04-patty_fw0qzu.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661087423/Burger/berger_9_h3cbrq.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_296/v1660813857/Burger/b01-topbun_a3ky6x.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_297/v1660813857/Burger/b02-onions_dyxqmr.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_340/v1660813857/Burger/b03-tomatoes_wjrblp.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_324/v1660813857/Burger/b04-patty_fw0qzu.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_432/v1661087423/Burger/berger_9_h3cbrq.png'
 ];

const StackBurger = () => {
  const moreThan550 = useMediaPredicate("(min-width: 550px)");
  return (
    <div className="stack-container">
      <div className="parallax-container">
      <Parallax pages={2}>
        <ParallaxLayer sticky={true}><h2>Only the best!</h2><p>We strive to elevate the burger experience to its top shelf – because you and your burger deserve better. We like them medium rare with a nice pink center and juices running down your arm, but you have it as you like it. We like them with a few premium toppings that are there for a reason.</p></ParallaxLayer>
        <ParallaxLayer offset={1.45} speed={1} id={'topbun'}>{moreThan550 ? <img src={images[0]} alt="Burgern bun big"/> : <img src={images[5]} alt="Burger bun small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.45} speed={2} id={'onions'}>{moreThan550 ? <img src={images[1]} alt="Onions big"/> : <img src={images[6]} alt="Onions small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.45} speed={3} id={'tomatoes'}>{moreThan550 ? <img src={images[2]} alt="Tomatoes big"/> : <img src={images[7]} alt="Tomatoes small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.45} speed={4} id={'patty'}>{moreThan550 ? <img src={images[3]} alt="Patty big"/> : <img src={images[8]} alt="Patty small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.45} speed={5} id={'bottombun'}>{moreThan550 ? <img src={images[4]} alt="Burger bun big"/> : <img src={images[9]} alt="Burger bun small"/>}</ParallaxLayer>
      </Parallax>
      </div>
    </div>
  )
}

export default StackBurger
