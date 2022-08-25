import React from 'react'
import Fullimg from './components/Fullimg/Fullimg';
import Navbar from './components/Navbar/Navbar';
import StackBurger from './components/StackBurger/StackBurger';
import StackBurger2 from './components/StackBurger2/StackBurger2';
import Videostage from './components/Videostage/Videostage';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Ingredients from './components/Ingredients/Ingredients';
import Burgermap from './components/Burgermap/Burgermap';

const images = [
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661031973/Burger/Frame_5_sj6msa.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661245805/Burger/Frame_16_dnpt5f.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661031971/Burger/Frame_9_jumbun.png',
  'https://res.cloudinary.com/dr24t0rw2/image/upload/v1661031968/Burger/Frame_8_atps8a.png',
];

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
