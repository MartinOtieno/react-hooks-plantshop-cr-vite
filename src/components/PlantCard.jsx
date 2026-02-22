import React, { useState } from "react";

export default function PlantCard({ plant, onSoldOut }) {
  const [soldOut, setSoldOut] = useState(false);
  function handleClick() {
    setSoldOut(!soldOut);
    onSoldOut(plant.id);
  }
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} width="200"/>
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>
      <button onClick={handleClick}> {soldOut ? "Sold Out" : "In Stock"}</button>
    </div>
  );
}