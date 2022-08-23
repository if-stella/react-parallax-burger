import React from 'react'
import Imgslider from './Imgslider'
import Ingredientdetail from './Ingredientdetail'
import './Ingredients.scss'
import AOS from 'aos';
import { useMediaPredicate } from "react-media-hook";
import 'aos/dist/aos.css';

AOS.init();

const ingredients = [
  'The buns',
  'The beef',
  'The bacon',
];

const infos = [
  "Our brioche bun is baked using a classic brioche recipe with rich buttery flavor. Made with unbromated & unbleached flours and no artificial ingredients it’s the perfect bun to hug your fixings. How about trying our infamous Pretzel-bun, or mix in our black-brioche?",
  "Our beef is organic, grass-fed, antibiotic- & growth-hormone free and ranched raised. Made with our custom, proprietary full muscle blend of organic brisket, chuck & short rib, it’s no wonder it steals the show!",
  "Our bacon is certified humane, antibiotic- & growth-hormone free, with no nitrites or nitrates. The bacon is gluten-free, minimally processed, with no animal byproducts or artificial flavors. Bacon lovers rejoice!",
];

const images = [
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661204839/Burger/patty_1_ez5f1h.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661204839/Burger/patty2_1_p9ipar.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661204834/Burger/bacon_2_apusud.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661204834/Burger/bacon_1_ybrj25.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_240/v1661204839/Burger/patty_1_ez5f1h.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_240/v1661204839/Burger/patty2_1_p9ipar.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_320/v1661204834/Burger/bacon_2_apusud.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/c_scale,w_320/v1661204834/Burger/bacon_1_ybrj25.png',
]

const Ingredients = () => {
  const moreThan550 = useMediaPredicate("(min-width: 550px)");
  return (
    <div className="ingredients">
      <div className="container">
        <h2  data-aos="fade-down" data-aos-duration="150" data-aos-easing="ease-in-out">Buns, Beef, Bacon</h2>
        <p></p>
        <Imgslider />
        <Ingredientdetail ingredientName={ingredients[0]} ingredientInfo={infos[0]}/>
        <div className="bottom-ingredients">
          <div className="bi-box">
            <div className="bi-box-imgs">
              {moreThan550 ?  <img src={images[0]} alt="Raw burger patty" data-aos="fade-up-left" data-aos-duration="300" data-aos-easing="ease-in-out"/> : <img src={images[4]} alt="Raw burger patty" data-aos="fade-up-right" data-aos-duration="300" data-aos-easing="ease-in-out"/>}
              {moreThan550 ?  <img src={images[1]} alt="Grilled burger patty" data-aos="fade-up-left" data-aos-duration="400" data-aos-easing="ease-in-out"/> : <img src={images[5]} alt="Grilled burger patty" data-aos="fade-up-left" data-aos-duration="400" data-aos-easing="ease-in-out"/>}
            </div>
            <Ingredientdetail ingredientName={ingredients[1]} ingredientInfo={infos[1]}/>
          </div>
          <div className="bi-box">
            <div className="bi-box-imgs">
              {moreThan550 ?  <img src={images[2]} alt="Bacon slice" data-aos="fade-up-right" data-aos-duration="300" data-aos-easing="ease-in-out"/> : <img src={images[6]} alt="Bacon slice" data-aos="fade-up-right" data-aos-duration="300" data-aos-easing="ease-in-out"/>}
              {moreThan550 ?  <img src={images[3]} alt="Bacon slice" data-aos="fade-up-right" data-aos-duration="400" data-aos-easing="ease-in-out"/> : <img src={images[7]} alt="Bacon slice" data-aos="fade-up-left" data-aos-duration="400" data-aos-easing="ease-in-out"/>}
            </div>
            <Ingredientdetail ingredientName={ingredients[2]} ingredientInfo={infos[2]}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingredients
