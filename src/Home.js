import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home from "./images/home.png";
function Home() {
  // useState
  const [message, setMessage] = useState("");
  // useEffect
  useEffect(() => {
    setMessage(
      "Step into a world of colors and fragrance! Our flower shop is dedicated to bringing joy through fresh, handpicked flowers and creative arrangements for birthdays, weddings, and everyday moments."
    );
  }, []);
  const container = {
    textAlign: "center",
    padding: "50px 20px"
  };
  const Card1 = {
    background: "linear-gradient(135deg, #ffffff, #f0f4f8)",
    padding: "50px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    Width: "900px",
    margin: "auto"
  };
  const buttonStyle = {
    marginTop: "25px",
    padding: "12px 25px",
    backgroundColor: "#1f618d",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px"
  };
  return (
    <div style={container}>
      <div style={Card1}>
        <h1>Welcome to The PETALS </h1>
        <p><i>{message}</i></p>
        <img
          src={home}
          alt="Flowers"
          style={{ width: "200px", marginTop: "20px" }}
        />
        <br />
        <Link to="/Flowers">
          <button style={buttonStyle}>
            Explore Flowers
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Home;