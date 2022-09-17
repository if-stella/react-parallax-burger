import React, { useState, useEffect } from 'react';
import Fullimg from './components/Fullimg/Fullimg';
import Navbar from './components/Navbar/Navbar';
import StackBurger from './components/StackBurger/StackBurger';
import StackBurger2 from './components/StackBurger2/StackBurger2';
import Videostage from './components/Videostage/Videostage';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Ingredients from './components/Ingredients/Ingredients';
import Burgermap from './components/Burgermap/Burgermap';
import Loader from './components/Loader/Loader';

const images = [
  'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393931/Bouncy%20Burgers/Frame_5_sj6msa_aqeimn.png',
  'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393930/Bouncy%20Burgers/Frame_16_dnpt5f_pdwrhd.png',
  'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393929/Bouncy%20Burgers/Frame_9_jumbun_ao30ck.png',
  'https://res.cloudinary.com/dhrtgukmg/image/upload/v1662393925/Bouncy%20Burgers/Frame_8_atps8a_fj5a9s.png',
];

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
        ) : (
      <div className="main-content">
        <Navbar />
        <Videostage />
        <StackBurger />
        <Menu />
        <Fullimg bgImg1={images[0]} bgImg2={images[1]}/>
        <Fullimg bgImg1={images[3]} bgImg2={images[2]}/>
        <Ingredients />
        <Burgermap />
        <StackBurger2 />
        <Footer />
      </div> )}
    </div>
  );
}

export default App;
