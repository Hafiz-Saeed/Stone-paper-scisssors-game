import './App.css';
import Content from './Landing page/Content'
import Images from './Images'
// // gsap
import { gsap } from 'gsap';
import { Power3 } from 'gsap';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';




function App() {


  // gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/home' element={<Home />} />
      </Routes>

      <div className="container">
        <Images timeline={tl} ease={ease} />
      </div>

    </div>
  );
}

export default App;
