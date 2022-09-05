import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Burgerdetail = (props) => {
  return (
    <div className="burgerdetail">
      <img src={props.burgerImage} alt={props.burgerName} data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out"/>
        <div className="description">
          <h3 data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out">{props.burgerName}</h3>
          <p data-aos="fade-up" data-aos-duration="250" data-aos-easing="ease-in-out">{props.burgerInfo}</p>
        </div>
    </div>
  )
}

export default Burgerdetail
