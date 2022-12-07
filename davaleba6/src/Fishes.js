import React from "react";
import FishCard from "./FishCard";
import fishes from "./fishes.json";
import "./App.css"
console.log(fishes);

const Fishes = (props) => {
  return (
    <div className="akula">
      {fishes.map((item) => (
        <FishCard {...item} {...item?.illustrationPhoto} />
      ))}
    </div>
  );
};

export default Fishes;
