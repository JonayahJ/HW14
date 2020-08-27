import React from "react";

const RenderCrew = (props, index) => {
  return (
    <tr key={index}>
      <th scope="row"><img src={props.image} alt={props.name} className="rounded-pill" /></th>
      <td>{props.rank}</td>
      <td>{props.name}</td>
      <td>{props.species}</td>
      <td>{props.gender}</td>
      <td>{props.occupation}</td>
    </tr>
  )
}

export default RenderCrew;


