import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import App from "../../App"

class Search extends Component {

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
                    value={this.state.searchName}
                    placeholder="Search officers"
                    onChange={ this.editSearchName }
                ></input>
                
                {/* Search button */}
                <div className="input-group-append">
                    <button className="btn btn-secondary">
                        Search
                    </button>
                </div> 
            </div>
        )
    }
}

export default Search;
