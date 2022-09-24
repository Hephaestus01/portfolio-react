import React from "react";

export default function Projects({
  name,
  type,
  description,
}) {
    
    return (
      <div>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <p>{description}</p>
      </div>
    );
}
