import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = (props) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group input-group" style={{marginBottom: 40}}>
        <div className="input-group-prepend">
            <span className="input-group-text">
            <FontAwesomeIcon icon="search" />
            </span>
        </div>
        <input className="form-control search" type="search" placeholder="Search officers"
        onChange={() => {
            props.findName(
                alert("findName!")
            );
          }}></input>
          
    </div>
  )
}

export default Search;
