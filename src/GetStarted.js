import React from "react";
import Navbar from "./Navbar"; // Import Navbar component
import Repurpose from "./RepurposeWays"; // Import Repurpose component
import Footer from "./Footer"; // Import Footer component

const GetStarted = () => {
  return (
    <div>
      <Navbar />
      <Repurpose /> {/* Your repurpose component here */}
      <Footer />
    </div>
  );
};

export default GetStarted;
