import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ImgCarousel from './components/ImgCarousel';


function App() {

  return (
    <>
      <Navbar/>
      <ImgCarousel/>
    </>
  )
}

export default App
