import React from "react";

const RenderCrew = (props, index) => {
  return (
    <tr key={index}>
      <th scope="row"><img src={props.image} alt={props.name} className="rounded-circle" /></th>
      <td>{props.rank}</td>
      <td>{props.name}</td>
      <td>{props.species}</td>
      <td>{props.gender}</td>
      <td>{props.occupation}</td>
      <td><a href={props.details} target="_blank" rel="noopener noreferrer" role="button" className="btn btn-warning">Details</a></td>
    </tr>
  )
}

export default RenderCrew;


