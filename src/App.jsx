import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import Medicine from './components/Medicine/Medicine';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Advice from './components/Advice/Advice';
import Footer from './components/Footer/Footer';

function App() {  // ✅ Function defined properly
  return (
    <>
      <div className="main2">
        <Header />
        <Home />
      </div>
      <Upload />
      <Medicine />
      <div className="main3" style={{ display: 'flex', marginBottom: '33px' }}>
        <About />
      </div>
      <div className="class" style={{ display: 'flex' }}>
        <Contact />
      </div>
      <div className="main5">
        <Advice />
      </div>
      <Footer />
    </>
  );
}

export default App;
