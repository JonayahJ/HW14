// import React from "react";
// import "./style.css";

// const RenderCrew = (props, index) => {
//   return (
//     <tr key={index}>
//       <th scope="row"><img src={props.image} alt={props.name} className="rounded-circle" /></th>
//       <td>{props.rank}</td>
//       <td>{props.name}</td>
//       <td>{props.species}</td>
//       <td>{props.gender}</td>
//       <td>{props.occupation}</td>
//       <td><a href={props.details} target="_blank" rel="noopener noreferrer" role="button" className="btn btn-warning">Details</a></td>
//     </tr>
//   )
// }

//  export default RenderCrew;

 import React from "react";
import "./style.css";

const RenderCrew = (props) => {
  return (
    <tr>
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

// import React from "react";
// import "./style.css";

// function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span onClick={() => props.removeFriend(props.id)} className="remove">
//         𝘅
//       </span>
//     </div>
//   );
// }

// export default FriendCard;



