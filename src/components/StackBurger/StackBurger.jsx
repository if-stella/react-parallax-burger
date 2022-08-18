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
      <Parallax pages={5}>
        <ParallaxLayer id={'topbun'}><img src={topBun} alt="Burger bun top"/></ParallaxLayer>
        <ParallaxLayer speed={5} id={'onions'}><img src={onions} alt="onions"/></ParallaxLayer>
        <ParallaxLayer speed={4} id={'tomatoes'}><img src={tomatoes} alt="tomatoes" id="tomatoes"/></ParallaxLayer>
        <ParallaxLayer speed={3} id={'patty'}><img src={patty} alt="patty" id="patty"/></ParallaxLayer>
        <ParallaxLayer id={'bottombun'}><img src={bottomBun} alt="Burger bun bottom" id="bottomBun"/></ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default StackBurger
