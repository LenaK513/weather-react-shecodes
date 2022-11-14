import React from "react";
// import axios from "axios";
import Cities from "../Cities/Cities";
import Title from "../Title/Title";
import List from "../List/List";
import DataTemp from "../DataTemp/DataTemp";
import { Container } from "./App.styled.jsx";
import Contact from "../Contact/Contact";

function App() {
  return (
    <Container>
      <Cities />
      <Title />
      <List />
      <DataTemp />
      <Contact />
    </Container>
  );
}

export default App;
