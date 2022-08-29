import React from "react";
import Map, {Marker} from "react-map-gl";
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Burgermap.scss';

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
          zoom: 14
        }}
        style={{width: 'var(--map-width)', height: 'var(--map-height)'}}
        mapStyle={`https://api.maptiler.com/maps/3485ba68-bc3f-4246-bd52-637c22f0b719/style.json?key=${mapKey}`}
      >
        <Marker
        longitude={9.988591459163892}
        latitude={53.54146925141621}
        color='#FE9D12'>
        { /*<img src="https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/299073544_556355532949852_4327379583011100778_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7W4E1XZGYcgAX-p6rLr&_nc_ht=scontent-frt3-1.xx&oh=00_AT_yZxYL9G1Y8wv_JX2SU6t3Utii_3RXK4KrT2HA8GSXug&oe=6312235F" className="markerIMG"/> */ }
        </Marker>
        <Marker
        longitude={9.968970425358744}
        latitude={53.54601303385451}
        color='#FE9D12'/>
        <Marker
        longitude={9.992130141479425}
        latitude={53.54800304330674}
        color='#FE9D12'/>
        <Marker
        longitude={9.98969797291128}
        latitude={53.550419375725326}
        color='#FE9D12'/>
        <Marker
        longitude={9.992918782070657}
        latitude={53.557178306408474}
        color='#FE9D12'/>
        <Marker
        longitude={10.012760312771425}
        latitude={53.560655178042225}
        color='#FE9D12'/>
        <Marker
        longitude={10.000876128247835}
        latitude={53.543310314915175}
        color='#FE9D12'/>
        <Marker
        longitude={10.010298799110643}
        latitude={53.550934014042475}
        color='#FE9D12'/>
        <Marker
        longitude={10.023781610891165}
        latitude={53.55275653970794}
        color='#FE9D12'/>
      </Map>

      </div>
    </div>
  )
}

export default Burgermap
