import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import CollectionCard from './components/CollectionCard';
import { useShopStore } from './store/store';
import { BrowserRouter } from 'react-router';


function App() {
  const products = useShopStore((state) => state.products);

  return (
    <React.StrictMode>
      <Navbar/>
      <BrowserRouter>
        {products.map((product, index) => (
          <CollectionCard key={index} name={product.name} price={product.price} img={product.photos[0]} data={product} />
        ))}
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
