import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Flowers from "./Flowers";
import Order from "./Order";
import Contact from "./Contact";
import Donation from "./Donation";

function App() {
  const pageStyle = {
    fontFamily: "Arial",
    backgroundColor: "lightblue",
    minHeight: "100vh"
  };

  const navbarStyle = {
    backgroundColor: "lightpink",
    padding: "15px",
    color: "black",
    border: "3px solid white",      // ✅ White border added
    borderRadius: "8px",            // ✅ Smooth corners
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)" // optional nice effect
  };

  const linkStyle = {
    color: "black",
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: "bold"
  };

  return (
    <BrowserRouter>
      <div style={pageStyle}>
        
        {/* Navbar */}
        <div style={navbarStyle}>
          <h2>The Petals </h2>
          <div>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/flowers" style={linkStyle}>Flowers</Link>
            <Link to="/Order" style={linkStyle}>Order</Link>
            <Link to="/donation" style={linkStyle}>Donate</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>
        </div>

        {/* Page Content */}
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;