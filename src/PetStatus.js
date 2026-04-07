import React from "react";
import { Link } from "react-router-dom";
import tom from "C:\Users\tikoo\OneDrive\Pictures\Screenshots\pic.png";
import max from "C:\Users\tikoo\OneDrive\Pictures\Screenshots\pic.png";
import bella from "C:\Users\tikoo\OneDrive\Pictures\Screenshots\pic.png";
import pug from "C:\Users\tikoo\OneDrive\Pictures\Screenshots\pic.png";
function Pets() {
  const pets = [
    { id: 1, name: "Tom", type: "Golden Retriever", img: tom, status: "Available" },
    { id: 2, name: "Max", type: "Dobermann", img: max, status: "Available" },
    { id: 3, name: "Bella", type: "Ragdoll", img: bella, status: "Adopted" },
    { id: 4, name: "Jimmy", type: "Pug", img: pug, status: "Available" }
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
  const imgStyle = { width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" };
  return (
    <div>
      <h2>Available Pets</h2>
      <div>
        {pets.map((pet) => (
          <div key={pet.id} style={cardStyle}>
            <img src={pet.img} alt={pet.name} style={imgStyle} />
            <h3>{pet.name}</h3>
            <p>{pet.type}</p>
            <p>
              <b>Status: </b>
              <span style={{ color: pet.status === "Available" ? "green" : "orange", fontWeight: "bold" }}>
                {pet.status}
              </span>
            </p>
            {pet.status === "Available" ? (
              <Link
                to="/adoption"
                state={{ petName: pet.name }} 
              >
                <button
                  style={{
                    marginTop: "10px",
                    padding: "8px",
                    backgroundColor: "#27ae60",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    width: "100%"
                  }}
                >
                  Adopt
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
export default Pets;