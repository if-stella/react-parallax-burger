import React, {useState} from "react";
import Map, {Marker, Popup} from "react-map-gl";
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Burgermap.scss';
import Markerimg from '../../assets/BBMarker.svg';

AOS.init();

const burgerhand = [
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661441300/Burger/Freehand_1_noyubj.png',
];

const mapKey = process.env.REACT_APP_MAP_TOKEN;

const Burgermap = () => {
  return (
    <div className="burgermap">
      <div className="mapinfo">
        <div className="mapinfotext">
          <h3 data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out">Get them now!</h3>
          <p data-aos="fade-up" data-aos-duration="250" data-aos-easing="ease-in-out">A description text! This is where you can find our delicious burgers! We've got several restaurants, all over the place – and are still growing!</p>
        </div>
        <img src={burgerhand[0]} alt="A hand holding a burger" className="burgerhand" data-aos="zoom-in-right" data-aos-duration="360" data-aos-easing="ease-in-out"/>
      </div>
      <div className="mapcontainer">
      <Map mapLib={maplibregl}
        initialViewState={{
          longitude: 10.000654,
          latitude: 53.550341,
          zoom: 13
        }}
        style={{width: 'var(--map-width)', height: 'var(--map-height)'}}
        mapStyle={`https://api.maptiler.com/maps/3485ba68-bc3f-4246-bd52-637c22f0b719/style.json?key=${mapKey}`}
      >
        <Marker
        longitude={9.988591459163892}
        latitude={53.54146925141621}>
        <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
        <Marker
        longitude={9.968970425358744}
        latitude={53.54601303385451}>
          <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
        <Marker
        longitude={9.992130141479425}
        latitude={53.54800304330674}>
          <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
        <Marker
        longitude={9.98969797291128}
        latitude={53.550419375725326}>
          <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
        <Marker
        longitude={9.992918782070657}
        latitude={53.557178306408474}>
          <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
        <Marker
        longitude={10.012760312771425}
        latitude={53.560655178042225}>
          <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
        <Marker
        longitude={10.000876128247835}
        latitude={53.543310314915175}>
          <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
        <Marker
        longitude={10.010298799110643}
        latitude={53.550934014042475}>
          <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
        <Marker
        longitude={10.023781610891165}
        latitude={53.55275653970794}>
          <img src={Markerimg} alt="Bouncy Burgers Marker Logo" style={{width: '32px', height: '40px'}}/>
        </Marker>
      </Map>

      </div>
    </div>
  )
}

export default Burgermap
