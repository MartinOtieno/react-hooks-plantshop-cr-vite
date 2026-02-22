import React from "react";

export default function Search({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <input ype="text" placeholder="Search plants..." value={search} onChange={handleChange}/>
  );
}