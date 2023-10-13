import { useState, createContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.jsx';

export const ShopContext = createContext({
  prodData: [],
  cartItems: [],
  addToCart: () => {},
})


function App() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const [prodData, setProdData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((response) => setProdData(response))
    .catch((error) => console.dir(error))
    .finally(() => setLoading(false))
  }, [])


  
  const addToCart = () => {
    return '';
  };

  return (
    <>
    <ShopContext.Provider value={{cartItems, prodData, addToCart}}>
      <NavBar/>
      <Outlet/>
    </ShopContext.Provider>

    </>
  )
}

export default App
