import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Stage from './components/Stage/Stage';
import StackBurger from './components/StackBurger/StackBurger';
import Videostage from './components/Videostage/Videostage';

function App() {
  return (
    <div>
      <Navbar />
      <Stage />
      <Videostage />
      <StackBurger />
    </div>
  );
}

export default App;
