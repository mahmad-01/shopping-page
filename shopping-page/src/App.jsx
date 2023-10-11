import { useState, createContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Shop from './pages/shop.jsx'
import Cart from './pages/cart.jsx'
import axios from 'axios';

export const ShopContext = createContext({
  prodData: [],
  cartItems: [],
  addToCart: () => {},
})


function App() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [prodData, setProdData] = useState(null);




  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((response) => setProdData(response))
    .catch((error) => console.dir(error))
    .finally(() => setLoading(false))
  }, [])

 // const addToCart = () => {
//  };


  return (
    <>
      <NavBar/>
      <Outlet context={ShopContext}/>
    </>
  )
}

export default App
