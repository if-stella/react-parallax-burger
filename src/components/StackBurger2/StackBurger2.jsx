import React from 'react'
import './StackBurger2.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useMediaPredicate } from "react-media-hook";

const images = [
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661081632/Burger/andy-chilton-oljL3vFlV2g-unsplash_8_oh8xws.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_7_oq7nux.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661081473/Burger/andy-chilton-oljL3vFlV2g-unsplash_6_ah1r7i.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_5_ca8eqr.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_4_cghsw1.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661081872/Burger/andy-chilton-oljL3vFlV2g-unsplash_2_xe2spz.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_3_ftjs1o.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661081537/Burger/andy-chilton-oljL3vFlV2g-unsplash_1_7_jlleth.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_426/v1661081632/Burger/andy-chilton-oljL3vFlV2g-unsplash_8_oh8xws.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_303/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_7_oq7nux.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_343/v1661081473/Burger/andy-chilton-oljL3vFlV2g-unsplash_6_ah1r7i.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_247/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_5_ca8eqr.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_242/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_4_cghsw1.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_298/v1661081872/Burger/andy-chilton-oljL3vFlV2g-unsplash_2_xe2spz.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_298/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_3_ftjs1o.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_468/v1661081537/Burger/andy-chilton-oljL3vFlV2g-unsplash_1_7_jlleth.png',
];

const StackBurger2 = () => {
  const moreThan550 = useMediaPredicate("(min-width: 550px)");
  return (
    <div className="stack2-container">
      <Parallax pages={2}>
        <ParallaxLayer offset={1.35} speed={1} id={'sesameseeds'}>{moreThan550 ? <img src={images[0]} alt="Sesame seeds big"/> : <img src={images[8]} alt="Sesame seeds small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={2} id={'topbun2'}>{moreThan550 ? <img src={images[1]} alt="Burger bun big"/> : <img src={images[9]} alt="Burger bun small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={3} id={'salad2'}>{moreThan550 ? <img src={images[2]} alt="Salad big"/> : <img src={images[10]} alt="Salad small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={4} id={'mayo'}>{moreThan550 ? <img src={images[3]} alt="Mayonaise big"/> : <img src={images[11]} alt="Mayonaise small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={5} id={'tomatoe2'}>{moreThan550 ? <img src={images[4]} alt="Tomato big"/> : <img src={images[12]} alt="Tomato small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={6} id={'ketchup'}>{moreThan550 ? <img src={images[5]} alt="Ketchup big"/> : <img src={images[13]} alt="Ketchup small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={7} id={'cheese'}>{moreThan550 ? <img src={images[6]} alt="Cheese big"/> : <img src={images[14]} alt="Cheese small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={8} id={'bottombun2'}>{moreThan550 ? <img src={images[7]} alt="Burger bun big"/> : <img src={images[15]} alt="Burger bun small"/>}</ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default StackBurger2
