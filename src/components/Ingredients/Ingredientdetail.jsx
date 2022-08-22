import React from 'react'
import './Ingredients.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Ingredientdetail = (props) => {
  return (
    <div className="ingredientdetail">
      <h3 data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out">{props.ingredientName}</h3>
      <p data-aos="fade-up" data-aos-duration="250" data-aos-easing="ease-in-out">{props.ingredientInfo}</p>
    </div>
  )
}

export default Ingredientdetail
