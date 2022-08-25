import React, { useState } from "react";
import Map from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Burgermap.scss'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

AOS.init();

const burgerhand = [
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661441300/Burger/Freehand_1_noyubj.png',
];

const Burgermap = () => {
  const [viewport, setViewport] = useState({
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 11
  });
  return (
    <div className="burgermap">
      <div className="mapinfo">
        <div className="mapinfotext">
          <h3 data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out">Get them now!</h3>
          <p data-aos="fade-up" data-aos-duration="250" data-aos-easing="ease-in-out">A description text! This is where you can find our delicious burgers! We've got several restaurants, all over the place – and are still growing!</p>
        </div>
        <img src={burgerhand[0]} alt="Hand holding a burger" className="burgerhand" data-aos="zoom-in-right" data-aos-duration="360" data-aos-easing="ease-in-out"/>
      </div>
      <div className="mapcontainer">
      <Map
        {...viewport}
        style={{width: 'var(--map-width)', height: 'var(--map-height)'}}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/if-stella/cl79iaoad000a14o1leq7m1lg"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        >
      My markers
      </Map>
      </div>
    </div>
  )
}

export default Burgermap
