import React from 'react';
import Hero from './components/Hero';
import Companies from './components/Companies';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      <Hero />
      <Companies />
      <About />
      <Footer />
    </div>
  );
}

export default App;
