import './css/App.css';
import React, { useState } from 'react'
import Navbar from './components/navbar';
import {Routes, Route } from 'react-router-dom'
import Home from './views/home';
import Shop from './views/shop';
import Cart from './views/cart';
import apicall from './components/photogallery';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route children path='/' element={<Home/>} />
        <Route children path='/shop' element={<Shop/>} />
        <Route children path='/cart' element={<Cart/>} />
        <Route children path='/apicall' element={<apicall/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
