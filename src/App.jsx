import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ShoeCard from './components/ShoeCard';
import { useShopStore } from './store/store';


function App() {
  const products = useShopStore((state) => state.products);

  return (
    <>
      <Navbar/>
      {products.map((product, index) => (
        <ShoeCard key={index} data={product.name} />
      ))}
    </>
  )
}

export default App
