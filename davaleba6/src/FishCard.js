import React from "react";
import "./App.css"

export default function FishCard(props) {
  const { title, info, region, scientificName, src } = props;

//   style={{ border: "1px solid black",
//   margin:2,padding:2,display:"flex",alignItems: "center",
//   gap:10 }

  return (
    <div className="tebzebi" >
      <div>
        <img src={src} width="200px" alt="tevzi" />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h5>{region}</h5>
      </div>
      <div>
        <h4>{scientificName}</h4>
      </div>

      <div>
        <h6>{info}</h6>
      </div>
    </div>
  );
}
