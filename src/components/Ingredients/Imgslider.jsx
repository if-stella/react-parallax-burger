import React from 'react'
import './Ingredients.scss'

const patties = [
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661245804/Burger/pexels-ron-lach-8879375_2_fafb2u.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661245804/Burger/food-photographer-phototastyfood-ru-X92WLoaQ1_o-unsplash_1_zqnrsn.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661245804/Burger/bun1_zsv0ex.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661245804/Burger/amirali-mirhashemian-sc5sTPMrVfk-unsplash_1_cwmp2l.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661245804/Burger/bun2_z7z1yo.png',
'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661245804/Burger/cesar-carlevarino-aragon-f5NwIK49WDM-unsplash_1_uwdi0a.png'
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
