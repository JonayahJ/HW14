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
    tempOff:officers,
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
    console.log("sorting")
    console.log(this.state.searchName.length)
   
    // console.log(this.state.officers)
    // create filtered list, set filtered list to officers
    //let filteredList = { officers: officers }
   
    this.setState({officers:this.state.officers.filter(officer => officer.name.toLowerCase().includes(this.state.searchName.toLowerCase()))})
    // return this.state.officers.filter(officer => officer.name.toLowerCase().includes(this.state.searchName.toLowerCase()))
    if(this.state.officers.length<1){
      this.setState({officers:this.state.tempOff});
    }
   
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { value } = event.target;

    // Updating the input's state
    this.setState({
      searchName: value.trim()
    });
    console.log("setting state"+ this.state.searchName)

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
        searchName={this.state.searchName}
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
          {/* {this.state.officers.map(RenderCrew)} */}
          {this.state.officers.map(curroff=>(
            <RenderCrew
            image={curroff.image}
            key={curroff.id}
            rank = {curroff.rank}
            name = {curroff.name}
            species = {curroff.species}
            gender = {curroff.gender}
            occupation = {curroff.occupation}
            details = {curroff.details}
            />
          ))}
          {/* map through the filtered list instead of all officers 
          
          {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
          */}
        </tbody>
      </ReactBootstrap.Table>
    </Wrapper>
  );
  }


}

export default App;
