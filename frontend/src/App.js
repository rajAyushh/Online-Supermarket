import './App.css';
import axios, {isCancel, AxiosError} from 'axios';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Router } from "react-router-dom"
import Signup from './pages/Signup';
import { BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CategoryProducts from './pages/CategoryProducts';
import Navigbar from './components/Navbar';
import Cartpage from './components/Cartpage';
import Payment from './pages/Payment';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

function App() {
  let [isLogin, setIsLogin] = useState(false)
  return (
    <>
    <BrowserRouter>
    <Navigbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cartpage/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path="/categories/:category" element={<CategoryProducts/>}/>
        <Route path="/categories/:category/:product" element={<ProductPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    <Footer/>
    </>
    )
}


export default App;
