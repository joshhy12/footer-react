import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import E_card from './pages/E_card';
import CardDetails from './pages/CardDetails';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/e_card" element={<E_card/>} />
            <Route path="/card-details/:id" element={<CardDetails />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}
export default App;
