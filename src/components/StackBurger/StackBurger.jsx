import React from 'react'
import './StackBurger.scss'
import topBun from '../../assets/b01-topbun.png'
import onions from '../../assets/b02-onions.png'
import tomatoes from '../../assets/b03-tomatoes.png'
import patty from '../../assets/b04-patty.png'
import bottomBun from '../../assets/b05-bottombun.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';



const StackBurger = () => {
  return (
    <div className="stack-container">
      <div className="parallax-container">
      <Parallax pages={2}>
        <ParallaxLayer sticky={true}><h2>Only the best!</h2><p>We strive to elevate the burger experience to its top shelf – because you and your burger deserve better. We like them medium rare with a nice pink center and juices running down your arm, but you have it as you like it. We like them with a few premium toppings that are there for a reason.</p></ParallaxLayer>
        <ParallaxLayer offset={1.35} factor={.2} speed={1} id={'topbun'}><img src={topBun} alt="Burger bun top"/></ParallaxLayer>
        <ParallaxLayer offset={1.35} factor={.2} speed={2} id={'onions'}><img src={onions} alt="onions"/></ParallaxLayer>
        <ParallaxLayer offset={1.35}  factor={.2} speed={3} id={'tomatoes'}><img src={tomatoes} alt="tomatoes" id="tomatoes"/></ParallaxLayer>
        <ParallaxLayer offset={1.35}  factor={.2} speed={4} id={'patty'}><img src={patty} alt="patty" id="patty"/></ParallaxLayer>
        <ParallaxLayer offset={1.35} factor={.2} speed={5} id={'bottombun'}><img src={bottomBun} alt="Burger bun bottom" id="bottomBun"/></ParallaxLayer>
      </Parallax>
      </div>
    </div>
  )
}

export default StackBurger
