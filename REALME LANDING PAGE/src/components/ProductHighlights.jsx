import React from "react";

const ProductHighlights = () => {
  const highlights = [
    { title: "Sleek Design", description: "A phone that looks as good as it performs." },
    { title: "Fast Performance", description: "Powered by the latest processor." },
    { title: "Long Battery Life", description: "Stay connected all day long." },
  ];

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Why Choose Realme?</h2>
      <div style={highlightContainer}>
        {highlights.map((highlight, index) => (
          <div key={index} style={highlightCard}>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const sectionStyle = {
  padding: "50px 20px",
  textAlign: "center",
  backgroundColor: "#f1f1f1",
};

const headingStyle = {
  fontSize: "2rem",
  marginBottom: "30px",
};

const highlightContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const highlightCard = {
  width: "300px",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  textAlign: "left",
};

export default ProductHighlights;
