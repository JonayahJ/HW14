import React from "react";

const Search = (props) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <input className="form-control search" type="search" placeholder="Search"
        onChange={() => {
            props.findName(
                alert("findName!")
            );
          }}></input>
    </div>
  )
}

export default Search;
