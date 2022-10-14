import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Travels
        </Typography>
      </AppBar>
    </Container>
  );
}

export default App;
