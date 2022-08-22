import React from 'react'
import './Ingredients.scss'

const patties = [
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661177637/Burger/pexels-ron-lach-8879375_2_a8dvwq.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661177636/Burger/food-photographer-phototastyfood-ru-X92WLoaQ1_o-unsplash_1_nizl3h.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661177636/Burger/bun1_wqocsd.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661177635/Burger/amirali-mirhashemian-sc5sTPMrVfk-unsplash_1_zqwwkt.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661177636/Burger/bun2_e8aicd.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661177635/Burger/cesar-carlevarino-aragon-f5NwIK49WDM-unsplash_1_netsmi.png'
];

const names = [
  'Classic Brioche',
  'Black Sesame',
  'Classic Bun',
  'Pretzel Bun',
  'Black Sourdough',
  'Cheddar Bun'
];

const Imgslider = () => {
  return (
    <div className="imgslider">
      <div className="slide-track">
        <div className="pattieslide">
          <h4>{names[0]}</h4>
          <img src={patties[0]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[1]}</h4>
          <img src={patties[1]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[2]}</h4>
          <img src={patties[2]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[3]}</h4>
          <img src={patties[3]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[4]}</h4>
          <img src={patties[4]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[5]}</h4>
          <img src={patties[5]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[0]}</h4>
          <img src={patties[0]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[1]}</h4>
          <img src={patties[1]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[2]}</h4>
          <img src={patties[2]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[3]}</h4>
          <img src={patties[3]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[4]}</h4>
          <img src={patties[4]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[5]}</h4>
          <img src={patties[5]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[0]}</h4>
          <img src={patties[0]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[1]}</h4>
          <img src={patties[1]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[2]}</h4>
          <img src={patties[2]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[3]}</h4>
          <img src={patties[3]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[4]}</h4>
          <img src={patties[4]} alt="Burger patty"/>
        </div>
        <div className="pattieslide">
          <h4>{names[5]}</h4>
          <img src={patties[5]} alt="Burger patty"/>
        </div>
      </div>
    </div>
  )
}

export default Imgslider
