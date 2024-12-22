import React from "react";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <h1 style={logoStyle}>Realme</h1>
      <ul style={navListStyle}>
        <li style={navItemStyle}>Home</li>
        <li style={navItemStyle}>Products</li>
        <li style={navItemStyle}>About</li>
        <li style={navItemStyle}>Contact</li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#fff",
};

const logoStyle = { fontSize: "1.5rem" };

const navListStyle = {
  display: "flex",
  listStyleType: "none",
  gap: "20px",
};

const navItemStyle = { cursor: "pointer", color: "#fff", fontSize: "1rem" };

export default Navbar;
