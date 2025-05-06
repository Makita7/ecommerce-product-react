import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import Navbar from './components/Navbar'
import CollectionsPage from './pages/CollectionsPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShoePage from './pages/ShoePage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes >
          <Route path='/' element={<CollectionsPage />} />
          <Route path={'/product/:prodId'} element={<ShoePage/>} />
          <Route path='/men' element={<MenPage />} />
          <Route path='/women' element={<WomenPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
