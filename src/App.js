import React from "react";
import Flip from "./components/Flip";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={5}
    >
      <Flip />
      <Flip />
      <Flip />
      <Flip />
      <Flip />
      <Flip />
      <Flip />
      <Flip />
    </Grid>
  );
}

export default App;
