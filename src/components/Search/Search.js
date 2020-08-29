import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Search extends Component {
    // constructor(){
    //     super();
   
    // }
        render(){    
            return (
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group input-group" style={{marginBottom: 40}}>
                    {/* Search icon */}
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        <FontAwesomeIcon icon="search" />
                        </span>
                    </div>

                    {/* Search input */}
                    <input className="form-control search" 
                        type="text" 
                        // value={this.searchName}
                        placeholder="Search officers by name"
                        onChange={this.props.handleInputChange}
                    ></input>
                    
                    {/* Search button */}
                    <div className="input-group-append">
                        <button className="btn btn-secondary" onClick={this.props.handleFormSubmit}>
                            Search
                        </button>
                    </div> 
                </div>
            )
        }
}

export default Search;
