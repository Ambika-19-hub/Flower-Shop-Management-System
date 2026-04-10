import React from "react";
import { Link } from "react-router-dom";

import Rose from "./images/rose.png";
import Lily from "./images/lily.png";
import Lotus from "./images/lotus.png";
import Tulip from "./images/tulip.png";

function Flowers() {
  const flowers = [
    { id: 1, name: "Rose", type: "Red", img: Rose, status: "Available" },
    { id: 2, name: "Lily", type: "White", img: Lily, status: "Sold" },
    { id: 3, name: "Lotus", type: "Pink", img: Lotus, status: "Sold" },
    { id: 4, name: "Tulip", type: "Yellow", img: Tulip, status: "Available" }
  ];

  const cardStyle = {
    display: "inline-block",
    verticalAlign: "top",
    backgroundColor: "white",
    padding: "15px",
    width: "220px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  const imgStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  };

  return (
    <div>
      <h2>Available Flowers </h2>

      <div>
        {flowers.map((flower) => (
          <div key={flower.id} style={cardStyle}>
            <img src={flower.img} alt={flower.name} style={imgStyle} />
            <h3>{flower.name}</h3>
            <p>{flower.type}</p>

            <p>
              <b>Status: </b>
              <span
                style={{
                  color: flower.status === "Available" ? "green" : "orange",                                                       //CONDITIONAL RENDERING
                  fontWeight: "bold"
                }}
              >
                {flower.status}
              </span>
            </p>

            {flower.status === "Available" ? (
              <Link to="/Order" state={{ flowerName: flower.name }}>   //LINKING
                <button
                  style={{
                    marginTop: "10px",
                    padding: "8px",
                    backgroundColor: "#e84393",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    width: "100%"
                  }}
                >
                  Buy 
                </button>
              </Link>
            ) : (
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px",
                  backgroundColor: "gray",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%"
                }}
              >
                Not Available
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flowers;