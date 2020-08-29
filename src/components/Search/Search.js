import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import App from "../../App"

class Search extends Component {
    constructor(){
        super();
        this.state={
            search:null
        }
    }
    
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit
        event.preventDefault();
        console.log("Is this working?")

      };

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
                        value={this.searchName}
                        placeholder="Search officers by name"
                        onChange={this.handleInputChange}
                    ></input>
                    
                    {/* Search button */}
                    <div className="input-group-append">
                        <button className="btn btn-secondary" onClick={this.handleFormSubmit}>
                            Search
                        </button>
                    </div> 
                </div>
            )
        }
}

export default Search;
