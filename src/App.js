import React from 'react';
import Navbar from './Navbar';  // Import the Navbar
import Hero from './Hero';
import Picture from './Picture';
import Steps from './Steps';
import RepurposeWays from './RepurposeWays';
import ProductivityGrid from './Productivity';
import FAQ from './FAQ';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <Picture />
      <Steps />
      <RepurposeWays />
      <ProductivityGrid />
      <FAQ />
      <Footer />
      {/* Add your other content here */}
    </div>
  );
};

export default App;
