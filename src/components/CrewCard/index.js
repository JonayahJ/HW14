import React from "react";
import "./style.css";

function CrewCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Gender:</strong> {props.gender}
          </li>
          <li>
            <strong>Species:</strong> {props.species}
          </li>
          <li>
            <strong>Affiliation:</strong> {props.affiliation}
          </li>
          <li>
            <strong>Rank:</strong> {props.rank}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
        </ul>
      </div>
      <span className="remove">𝘅</span>
    </div>
  );
}

export default CrewCard;
