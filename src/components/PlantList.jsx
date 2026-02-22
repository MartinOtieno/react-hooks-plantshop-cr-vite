import React from "react";
import PlantCard from "./PlantCard";

export default function PlantList({ plants, onSoldOut }) {
  return (
    <div>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onSoldOut={onSoldOut}/>
      ))}
    </div>
  );
}