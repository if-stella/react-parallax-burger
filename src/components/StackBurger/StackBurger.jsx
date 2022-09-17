import React from 'react'
import './StackBurger.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useMediaPredicate } from "react-media-hook";
import AOS from 'aos';

AOS.init();

const images = [
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393765/Bouncy%20Burgers/b01-topbun_a3ky6x_oxizyd.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393645/Bouncy%20Burgers/b02-onions_dyxqmr_dfby0x.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393721/Bouncy%20Burgers/b03-tomatoes_wjrblp_w1lfy0.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393765/Bouncy%20Burgers/b04-patty_fw0qzu_yxqycv.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393924/Bouncy%20Burgers/berger_9_h3cbrq_iuop1y.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/c_scale,w_296/v1662393765/Bouncy%20Burgers/b01-topbun_a3ky6x_oxizyd.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/c_scale,w_297/v1662393645/Bouncy%20Burgers/b02-onions_dyxqmr_dfby0x.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/c_scale,w_340/c_scale,w_324/v1662393721/Bouncy%20Burgers/b03-tomatoes_wjrblp_w1lfy0.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/c_scale,w_324/v1662393765/Bouncy%20Burgers/b04-patty_fw0qzu_yxqycv.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/c_scale,w_432/v1662393924/Bouncy%20Burgers/berger_9_h3cbrq_iuop1y.png'
 ];

const StackBurger = () => {
  const moreThan550 = useMediaPredicate("(min-width: 550px)");
  return (
    <div className="stack-container">
      <div className="parallax-container">
      <Parallax pages={2}>
        <ParallaxLayer sticky={true}><h2 data-aos="fade-down" data-aos-duration="200" data-aos-easing="ease-in-out">Only the best!</h2><p data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out">We strive to elevate the burger experience to its top shelf – because you and your burger deserve better. We like them medium rare with a nice pink center and juices running down your arm, but you have it as you like it.</p></ParallaxLayer>
        <ParallaxLayer offset={1.36} speed={1} id={'topbun'}>{moreThan550 ? <img src={images[0]} alt="Burgern bun big"/> : <img src={images[5]} alt="Burger bun small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.36} speed={2} id={'onions'}>{moreThan550 ? <img src={images[1]} alt="Onions big"/> : <img src={images[6]} alt="Onions small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.36} speed={3} id={'tomatoes'}>{moreThan550 ? <img src={images[2]} alt="Tomatoes big"/> : <img src={images[7]} alt="Tomatoes small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.36} speed={4} id={'patty'}>{moreThan550 ? <img src={images[3]} alt="Patty big"/> : <img src={images[8]} alt="Patty small"/>}</ParallaxLayer>
        <ParallaxLayer offset={1.36} speed={5} id={'bottombun'}>{moreThan550 ? <img src={images[4]} alt="Burger bun big"/> : <img src={images[9]} alt="Burger bun small"/>}</ParallaxLayer>
      </Parallax>
      </div>
    </div>
  )
}

export default StackBurger
