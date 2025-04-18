import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import Medicine from './components/Medicine/Medicine';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Advice from './components/Advice/Advice';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {  // ✅ Function defined properly
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/medicine' element={<Medicine />} />
          <Route path='/adviceSection' element={<Advice />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
