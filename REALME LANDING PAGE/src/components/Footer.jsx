import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0 }}>© 2024 Realme. All rights reserved.</p>
      <div style={socialIcons}>
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Instagram</span>
      </div>
    </footer>
  );
};

const footerStyle = {
  padding: "20px 10px",
  textAlign: "center",
  backgroundColor: "#333",
  color: "#fff",
};

const socialIcons = {
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

export default Footer;
