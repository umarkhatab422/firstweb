import React from 'react'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './components/Home/home.jsx'
import CSS from './App.css'
// import {  createBrowserRouter,  RouterProvider,  Route, Router,} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <switch>
        <Routes>
        <Route path="/order_a_device" element={<order_a_evice title="Order a Device"/>}></Route>
        <Route path="/" element={<Home />}></Route>
        
        </Routes>
      </switch>
      <Footer />
    </Router>
  );
}
