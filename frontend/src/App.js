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
import ManagerProfile from './pages/ManagerProfile';
import AdminProfile from './pages/AdminProfile';
import AddCategory from './pages/AddCategory';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import ViewItems from './pages/ViewItems';
import ViewItems_admin from './pages/ViewItems_admin';
import ManageUsers from './pages/ManageUsers';
import Report from './reports'


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
        <Route path='/addcategory' element={<AddCategory/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/updateproduct/edit' element={<UpdateProduct/>}/>
        <Route path='/manager' element={<ManagerProfile/>}/>
        <Route path='/admin' element={<AdminProfile/>}/>
        <Route path='/admin/manageusers' element={<ManageUsers/>}/>
        <Route path='/admin/viewitems' element={<ViewItems_admin/>}/>
        <Route path='/viewitems' element={<ViewItems/>}/>
        <Route path='/generatereport' element={<Report/>}/>
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
