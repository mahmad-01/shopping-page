import { useState, createContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Shop from './pages/shop.jsx'
import Cart from './pages/cart.jsx'

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
})


function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = [];


 // useEffect(() => {
 //   fetch('https://fakestoreapi.com/products', {mode: 'cors' })
  //  .then((response) => response.json())
  //  .then(response) => 
  //}, [])

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
