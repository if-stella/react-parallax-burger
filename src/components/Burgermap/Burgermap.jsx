import React, { useState } from "react";

import Map from "react-map-gl";

import './Burgermap.scss'

const burgerhand = [
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661441300/Burger/Freehand_1_noyubj.png',
];

const Burgermap = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7790262,
    longitude: -122.419906,
    zoom: 9
  });
  return (
    <div className="burgermap">
      <div className="mapinfo">
        <div className="mapinfotext">
          <h3>Get them now!</h3>
          <p>A description text! This is where you can find our delicious burgers! We've got several restaurants, all over the place – and are still growing!</p>
        </div>
        <img src={burgerhand[0]} alt="Hand holding a burger" className="burgerhand"/>
      </div>
      <div className="mapcontainer">
      <Map
        {...viewport}
        style={{width: 'var(--map-width)', height: 'var(--map-height)'}}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/if-stella/cl796t51o001j14rp7wzym44k"

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
