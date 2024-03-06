import React from 'react';
import HomePage from './pages/HomePage';
import Footer from './component/Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './component/ScrollToTop';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
