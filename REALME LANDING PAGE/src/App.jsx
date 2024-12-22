import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductHighlights from "./components/ProductHighlights";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ProductHighlights />
      <Footer />
    </div>
  );
};

export default App;
