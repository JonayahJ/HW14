import React from "react";
import RenderCrew from "./components/CrewTable";
import Wrapper from "./components/Wrapper";
import officers from "./crewlist.json";
import "./App.css";
import * as ReactBootstrap from "react-bootstrap";
import "../src/fonts/Stardate81316-aolE.ttf"

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
      <h1 className="title">USS Cerritos Crew Manifest</h1>
      {/* Crew Table */}
      <ReactBootstrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Headshot</th>
            <th>Rank</th>
            <th>Name</th>
            <th>Species</th>
            <th>Gender</th>
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
