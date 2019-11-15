import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <span>{props.name}</span>;<p>{props.gender}</p>
  <p>{props.status}</p>
<h3>{props.id}</h3>
<img src = {props.image} />
    </div>
  );
}
