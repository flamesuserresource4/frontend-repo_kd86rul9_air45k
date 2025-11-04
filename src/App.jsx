import React from 'react';
import Hero from './components/Hero';
import CompanyProfile from './components/CompanyProfile';
import Companies from './components/Companies';
import Team from './components/Team';
import Story from './components/Story';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      <Hero />
      <CompanyProfile />
      <Companies />
      <Team />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
