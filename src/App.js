import React from "react";
import "./components/FontAwesomeIcons/index"
import RenderCrew from "./components/CrewTable";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search/Search"
import officers from "./crewlist.json";
import * as ReactBootstrap from "react-bootstrap";
import "../src/fonts/Stardate81316-aolE.ttf"
import "./App.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


class App extends React.Component{
  state = { officers }

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

  filterOccupation = () => {
    this.setState({
      officers: this.state.officers.sort((a, b) => (a.occupation > b.occupation) ? 1 : -1)
    })
  }

  findName=()=>{
    // const officers = this.state.officers.filter((officer) => officer.name !== name);
    // this.setState({
    //   officers,
    // });
  }

  render() {
  return (
    <Wrapper>
      {/* "Hero" Image */}
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </section>

      {/* Title */}
      <h1 className="title">USS Cerritos Crew Manifest</h1>

      {/* Search Form */}
      <Search 
      findName={this.findName}/>

      {/* Crew Table */}
      <ReactBootstrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Headshot</th>
            <th> Rank <button className="btn btn-light" onClick={() => {this.filterRank();}}><FontAwesomeIcon icon="filter" /></button></th>
            <th> Name <button className="btn btn-light" onClick={() => {this.filterName();}}><FontAwesomeIcon icon="filter" /></button></th>
            <th> Species <button className="btn btn-light" onClick={() => {this.filterSpecies();}}><FontAwesomeIcon icon="filter" /></button></th>
            <th> Gender <button className="btn btn-light" onClick={() => {this.filterGender();}}><FontAwesomeIcon icon="filter" /></button></th>
            <th> Occupation <button className="btn btn-light" onClick={() => {this.filterOccupation();}}><FontAwesomeIcon icon="filter" /></button></th>
            <th>Wiki Details</th>
          </tr>
        </thead>
        <tbody>
          {this.state.officers.map(RenderCrew)}
        </tbody>
      </ReactBootstrap.Table>
    </Wrapper>
  );
  }


}

export default App;
