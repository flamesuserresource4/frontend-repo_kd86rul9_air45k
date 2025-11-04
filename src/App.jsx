import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Story from './components/Story';

function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-black font-sans text-white">
      <Navbar />
      <Hero />
      <Companies />
      <Story />
    </div>
  );
}

export default App;
