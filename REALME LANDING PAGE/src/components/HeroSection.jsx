import React from "react";

const HeroSection = () => {
  return (
    <div style={heroStyle}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to Realme</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Experience cutting-edge technology with our latest devices.
      </p>
      <div style={imageContainer}>
        <img
          src="https://www.whatmobile.com.pk/control/news/assets/27112024/f0ab1d685fdbb7cc384738ac3a4f26ee.jpg"
          alt="Realme C75"
          style={imageStyle}
        />
      </div>
      <div style={ctaContainer}>
        <h2 style={productTitle}>Realme C75</h2>
        <button style={ctaButton}>Explore Now</button>
      </div>
    </div>
  );
};

const heroStyle = {
  textAlign: "center",
  padding: "50px 20px",
  backgroundColor: "#f9f9f9",
};

const imageContainer = {
  margin: "20px auto",
  textAlign: "center",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const ctaContainer = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
};

const productTitle = {
  fontSize: "1.5rem",
  color: "#333",
};

const ctaButton = {
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default HeroSection;
    