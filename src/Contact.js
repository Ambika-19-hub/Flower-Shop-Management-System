import React from "react";
function Contact() {
  //styling
  const style = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  };
  //JSX
  return (
    <div style={style}>
      <h2>Contact Us</h2>
      <p>Email: thepetals@gmail.com</p>
      <p>Phone: +91 9341827830</p>
    </div>
  );
}
export default Contact;