import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

export default function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, soldOut: !plant.soldOut }
        : plant
    );

    setPlants(updatedPlants);
  }
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Plant Shop</h1>
      <Search search={search} setSearch={setSearch} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} onSoldOut={handleSoldOut}/>
    </div>
  );
}