import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Lowongan from './pages/Lowongan';
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0); 
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="flex flex-col min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Rute ke halaman utama */}
            <Route path="/" element={<Home />} />
            
            {/* Rute ke halaman lowongan */}
            <Route path="/lowongan" element={<Lowongan />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}