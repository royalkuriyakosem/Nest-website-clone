import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SuccessStories from './components/SuccessStories';
import Industries from './components/Industries';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <SuccessStories />
      <Industries />
      <Footer />
    </div>
  );
}

export default App;
