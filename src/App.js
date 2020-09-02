import React, { Component } from "react";
import "./components/FontAwesomeIcons/index"
import RenderCrew from "./components/CrewTable";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search/Search"
import officers from "./crewlist.json";
import * as ReactBootstrap from "react-bootstrap";
import "../src/fonts/Stardate81316-aolE.ttf"
import "./App.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


class App extends Component{
  state = { 
    officers,
    searchName: "",
    filteredList: []
  }

  filterName = () => {
    this.setState({
      officers: this.state.officers.sort((a, b) => (a.name > b.name) ? 1 : -1)
    })
  }

  filterRank = () => {
    this.setState({
      officers: this.state.officers.sort((a, b) => (a.rank > b.rank) ? 1 : -1)
    })
  }

  filterSpecies = () => {
    this.setState({
      officers: this.state.officers.sort((a, b) => (a.species > b.species) ? 1 : -1)
    })
  }

  filterGender = () => {
    this.setState({
      officers: this.state.officers.sort((a, b) => (a.gender > b.gender) ? 1 : -1)
    })
  }

  filterOccu = () => {
    this.setState({
      officers: this.state.officers.sort((a, b) => (a.occupation > b.occupation) ? 1 : -1)
    })
  }

  findName = () => {
    // console.log(this.state.officers)
    // create filtered list, set filtered list to officers
    let filteredList = { officers: officers }
    return this.state.officers.filter(officer => officer.name.toLowerCase().includes(this.state.searchName.toLowerCase()))
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { value } = event.target;

    // Updating the input's state
    this.setState({
      searchName: value
    });

    //find officer by name
    this.findName()
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit
    event.preventDefault();
    
    // console.log("Is this working?")
    this.setState({
      searchName: ""
      });

    //find officer by name
    this.findName()
  };

  

  render() {
    // console.log(this.state, 'is the state')

  return (
    <Wrapper>
      {/* "Hero" Image */}
      <section className="bgimage">
        <div className="cover">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </section>

      {/* Title */}
      <h1 className="title">USS Cerritos Crew Manifest</h1>

      {/* Search Form */}
      <Search 
        handleInputChange={this.handleInputChange} 
        handleFormSubmit={this.handleFormSubmit}
      />

      {/* Crew Table */}
      <ReactBootstrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Headshot</th>
            <th> Rank &nbsp;<FontAwesomeIcon icon="sort-alpha-down" onClick={() => {this.filterRank();}}/></th>
            <th> Name &nbsp;<FontAwesomeIcon icon="sort-alpha-down" onClick={() => {this.filterName();}}/></th>
            <th> Species &nbsp;<FontAwesomeIcon icon="sort-alpha-down" onClick={() => {this.filterSpecies();}}/></th>
            <th> Gender &nbsp;<FontAwesomeIcon icon="sort-alpha-down" onClick={() => {this.filterGender();}}/></th>
            <th> Occupation &nbsp;<FontAwesomeIcon icon="sort-alpha-down" onClick={() => {this.filterOccu();}}/></th>
            <th>Wiki Details</th>
          </tr>
        </thead>
        <tbody>
          {this.state.officers.map(RenderCrew)}
          {/* map through the filtered list instead of all officers */}
        </tbody>
      </ReactBootstrap.Table>
    </Wrapper>
  );
  }


}

export default App;
