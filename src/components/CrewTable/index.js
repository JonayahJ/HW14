import React from "react";
import "./style.css";

function CrewRow(props) {
  return (
    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Species:</strong> {props.species}
    //       </li>
    //       <li>
    //         <strong>Rank:</strong> {props.rank}
    //       </li>
    //       <li>
    //         <strong>Occupation:</strong> {props.occupation}
    //       </li>
    //     </ul>
    //   </div>
    //   <span className="remove">𝘅</span>
    // </div>

    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Headshot</th>
          <th scope="col">Rank</th>
          <th scope="col">Name</th>
          <th scope="col">Species</th>
          <th scope="col">Occupation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><img src={props.image} alt={props.name} className="rounded-pill" /></th>
          <td>{props.rank}</td>
          <td>{props.name}</td>
          <td>{props.species}</td>
          <td>{props.occupation}</td>
        </tr>
      </tbody>
    </table>

  );
}

export default CrewRow;
