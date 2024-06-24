"use client";
import React, { useState } from "react";

const FilterSerach = () => {
  const items = ["Apple", "Ball", "Cat", "Elephant", "Dog"];
  const [searchItem, setSearchItem] = useState("");
  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(searchItem.toLowerCase());
  });
  return (
    <div className="p-10">
      <input
        type="text"
        placeholder="Search here"
        className="border-2 rounded p-2 border-black mb-2"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <ul className="list-disc">
        {filteredItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default FilterSerach;
