import 'bootstrap/dist/css/bootstrap.min.css'
import Blog from 'components/Blog/Blog.jsx'
import BookAdemo from 'components/BookDemo/Book_a_demo.jsx'
import OrderDevice from 'components/OrderaDevice/Order_a_device.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Header from 'components/Header/Header.jsx'
import 'font-awesome/css/font-awesome.min.css'
import Home from 'pages/Home/Home.js';
import React from 'react'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Header />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/book_a_demo" element={<BookAdemo title="Book A Demo"/>}/>
        <Route path="/blog" element={<Blog title="Order a Device"/>}/>
        <Route path="/order_a_device" element={<OrderDevice title="Order a Device"/>}/>
        </Routes>
         <Footer />
    </Router>
  );
}