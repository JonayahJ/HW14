import React from "react";
import CrewRow from "./components/CrewTable";
import Wrapper from "./components/Wrapper";
import officers from "./crewlist.json";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <h1 className="title">Crew Manifest</h1>
      <CrewRow
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
      />
    </Wrapper>
  );
}

export default App;
