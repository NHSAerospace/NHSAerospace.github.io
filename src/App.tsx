import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Awards from './components/Awards';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/gallery'element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
