import React from 'react'
import './Ingredients.scss'

const patties = [
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393765/Bouncy%20Burgers/pexels-ron-lach-8879375_2_fafb2u_whqzpc.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393721/Bouncy%20Burgers/food-photographer-phototastyfood-ru-X92WLoaQ1_o-unsplash_1_zqnrsn_kzyogn.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393721/Bouncy%20Burgers/bun1_zsv0ex_zotykv.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393720/Bouncy%20Burgers/amirali-mirhashemian-sc5sTPMrVfk-unsplash_1_cwmp2l_qqnfu3.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393674/Bouncy%20Burgers/bun2_z7z1yo_e1dvha.png',
'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393674/Bouncy%20Burgers/cesar-carlevarino-aragon-f5NwIK49WDM-unsplash_1_uwdi0a_nxfocc.png'
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
