import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Navbar from './Navbar';  // Import the Navbar
import Hero from './Hero';
import Picture from './Picture';
import Steps from './Steps';
import RepurposeWays from './RepurposeWays';
import ProductivityGrid from './Productivity';
import FAQ from './FAQ';
import Footer from './Footer';
import GetStarted from './GetStarted';  // Import the GetStarted component

const App = () => {
  return (
    <Router>
      <div>
        <Routes> {/* Replace Switch with Routes */}
          {/* Route for home page */}
          <Route path="/" element={<><Navbar /><Hero /><Picture /><Steps /><RepurposeWays /><ProductivityGrid /><FAQ /><Footer /></>} />
          
          {/* Route for GetStarted page */}
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
