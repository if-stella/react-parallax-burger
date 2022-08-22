import React from 'react'
import Burgerdetail from './Burgerdetail';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Menu.scss'

const burgers = [
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661118992/Burger/Rectangle_23_w4bnwn.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661118991/Burger/Rectangle_24_dgluku.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661118991/Burger/unsplash_Va6e3PrBRy4_xuckgu.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661118991/Burger/Rectangle_21_itinea.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661118991/Burger/unsplash_JqnuWlHmDfE_edm9qx.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661118991/Burger/Rectangle_22_sz4byc.png',
];

const burgerNames = [
  "Thank god it's fried egg",
  'New bacon-ings',
  'Blue is the warmest cheese',
  "Pepper don't preach",
  'If looks could kale',
  'Mushroom with a view',
];

const burgerInfos = [
  "Pretzel bun, applewood caramelized bacon, onion-pickle mayo, tomatoes, runny fried egg.",
  'All-natural bison, organic cheddar, red onions, organic ketchup & mustard, onion jam, black brioche bun.',
  'Beef and smoked bacon patty, blue cheese, fig jam and runny truffle mayo.',
  "Guacamole, caramelized onions, pepper jack cheese, queso sauce, chipotle aioli, pico de gallo, jalapeño, tomato.",
  'Oregano-spiced beef, chipotle mayo, roasted tomatoes, grilled mushrooms, caramelized onions and kale.',
  'Pickled onions, grilled mushrooms, smoked bacon chili, vermont white cheddar, fritos, onion mayo.',
];

AOS.init();

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <h2 data-aos="fade-down" data-aos-duration="150" data-aos-easing="ease-in-out">Meet our burgers!</h2>
          <div className="menugrid">
            <Burgerdetail burgerImage={burgers[0]} burgerName={burgerNames[0]} burgerInfo={burgerInfos[0]}/>
            <Burgerdetail burgerImage={burgers[3]} burgerName={burgerNames[3]} burgerInfo={burgerInfos[3]}/>
            <Burgerdetail burgerImage={burgers[1]} burgerName={burgerNames[1]} burgerInfo={burgerInfos[1]}/>
            <Burgerdetail burgerImage={burgers[4]} burgerName={burgerNames[4]} burgerInfo={burgerInfos[4]}/>
            <Burgerdetail burgerImage={burgers[2]} burgerName={burgerNames[2]} burgerInfo={burgerInfos[2]}/>
            <Burgerdetail burgerImage={burgers[5]} burgerName={burgerNames[5]} burgerInfo={burgerInfos[5]}/>
          </div>
      </div>
    </div>
  )
}

export default Menu
