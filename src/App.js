import React from "react";
import RenderCrew from "./components/CrewTable";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search/Search"
import officers from "./crewlist.json";
import * as ReactBootstrap from "react-bootstrap";
import "../src/fonts/Stardate81316-aolE.ttf"
import "./App.css";

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
            <th><button onClick={() => {
                  this.filterRank();
                }}>Rank</button></th>
            <th>
              <button onClick={() => {
                  this.filterName();
                }}>Name</button>
          </th>
            <th>Species</th>
            <th>Gender</th>
            <th>Occupation</th>
            <th>Details</th>
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
