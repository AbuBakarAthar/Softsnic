import React from 'react'
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/pages/about'
import Blogs from './components/pages/blogs'
import Service from './components/pages/service'
import Team from './components/pages/team'
import Product from './components/pages/product'
import Contact from './components/pages/contact'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/home" element={<Home />} />  {/* Add this line */}
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blogs />} />
      <Route path='/team' element={<Team />} />
      <Route path='/services' element={<Service />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contactus' element={<Contact />} />



    </Routes>
    </BrowserRouter>
      
    </>
  )
}


export default App
