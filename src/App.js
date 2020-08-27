import React from "react";
import RenderCrew from "./components/CrewTable";
import Wrapper from "./components/Wrapper";
import officers from "./crewlist.json";
import "./App.css";
import * as ReactBootstrap from "react-bootstrap";

function App() {
  return (
    <Wrapper>
      {/* "HeroImage" */}
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </section>
      {/* Title */}
      <h1 className="title">Crew Manifest</h1>
      {/* Crew Table */}
      {/* <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Headshot</th>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Species</th>
            <th scope="col">Occupation</th>
          </tr>
        </thead>
        </table>  
      {/* Crew Rows */}
      {/* <CrewRow
        name={officers[0].name}
        image={officers[0].image}
        species={officers[0].species}
        affiliation={officers[0].affiliation}
        rank={officers[0].rank}
        occupation={officers[0].occupation}
      />
      <CrewRow
        name={officers[1].name}
        image={officers[1].image}
        species={officers[1].species}
        affiliation={officers[1].affiliation}
        rank={officers[1].rank}
        occupation={officers[1].occupation}
      />
      <CrewRow
        name={officers[2].name}
        image={officers[2].image}
        species={officers[2].species}
        affiliation={officers[2].affiliation}
        rank={officers[2].rank}
        occupation={officers[2].occupation}
      />
      <CrewRow
        name={officers[3].name}
        image={officers[3].image}
        species={officers[3].species}
        affiliation={officers[3].affiliation}
        rank={officers[3].rank}
        occupation={officers[3].occupation}
      />
      <CrewRow
        name={officers[4].name}
        image={officers[4].image}
        species={officers[4].species}
        affiliation={officers[4].affiliation}
        rank={officers[4].rank}
        occupation={officers[4].occupation}
      />
      <CrewRow
        name={officers[5].name}
        image={officers[5].image}
        species={officers[5].species}
        affiliation={officers[5].affiliation}
        rank={officers[5].rank}
        occupation={officers[5].occupation}
      />
      <CrewRow
        name={officers[6].name}
        image={officers[6].image}
        species={officers[6].species}
        affiliation={officers[6].affiliation}
        rank={officers[6].rank}
        occupation={officers[6].occupation}
      />
      <CrewRow
        name={officers[7].name}
        image={officers[7].image}
        species={officers[7].species}
        affiliation={officers[7].affiliation}
        rank={officers[7].rank}
        occupation={officers[7].occupation}
      />
      <CrewRow
        name={officers[8].name}
        image={officers[8].image}
        species={officers[8].species}
        affiliation={officers[8].affiliation}
        rank={officers[8].rank}
        occupation={officers[8].occupation}
      /> */}

      <ReactBootstrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Headshot</th>
            <th>Rank</th>
            <th>Name</th>
            <th>Species</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {officers.map(RenderCrew)}
        </tbody>
      </ReactBootstrap.Table>
    </Wrapper>
  );
}

export default App;
