import React from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/Home/home.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/js/main.js';

// import {  createBrowserRouter,  RouterProvider,  Route, Router,} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
// import OrderDevice from './components/OrderDevice/order-a-device.jsx'
import OrderDevice from './components/OrderaDevice/order_a_device.jsx';
import Blog from './components/Blog/blog.jsx';
import BookAdemo from './components/BookDemo/book_a_demo.jsx'

export default function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
        <Route path="/book_a_demo" element={<BookAdemo title="Book A Demo"/>}></Route>
        <Route path="/blog" element={<Blog title="Order a Device"/>}></Route>
        <Route path="/order_a_device" element={<OrderDevice title="Order a Device"/>}></Route>
        <Route path="/" element={<Home />}></Route>
        
        </Routes>
     
      <Footer />
    </Router>
  );
}