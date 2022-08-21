import React from 'react'
import './StackBurger2.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const images = [
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661081632/Burger/andy-chilton-oljL3vFlV2g-unsplash_8_oh8xws.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_7_oq7nux.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661081473/Burger/andy-chilton-oljL3vFlV2g-unsplash_6_ah1r7i.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_5_ca8eqr.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_4_cghsw1.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661081872/Burger/andy-chilton-oljL3vFlV2g-unsplash_2_xe2spz.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661079358/Burger/andy-chilton-oljL3vFlV2g-unsplash_3_ftjs1o.png',
 'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661081537/Burger/andy-chilton-oljL3vFlV2g-unsplash_1_7_jlleth.png',
];



const StackBurger2 = () => {
  return (
    <div className="stack2-container">
      <Parallax pages={2}>
        <ParallaxLayer offset={1.25} speed={1} id={'sesameseeds'}><img src={images[0]} alt="Sesame seeds"/></ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={2} id={'topbun2'}><img src={images[1]} alt="Burger bun"/></ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={3} id={'salad2'}><img src={images[2]} alt="Salad"/></ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={4} id={'mayo'}><img src={images[3]} alt="Mayonaise"/></ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={5} id={'tomatoe2'}><img src={images[4]} alt="Tomatoe-slice"/></ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={6} id={'ketchup'}><img src={images[5]} alt="Ketchup"/></ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={7} id={'cheese'}><img src={images[6]} alt="Cheese"/></ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={8} id={'bottombun2'}><img src={images[7]} alt="Salad and onions"/></ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default StackBurger2
