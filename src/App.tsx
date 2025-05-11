import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Works from './components/Works';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Works />
        <Pricing />
        <Testimonials />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;