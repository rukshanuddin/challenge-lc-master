import React from "react";
import { Paper, Typography } from "@material-ui/core";
export default function Title(props) {
  return (
    <Paper  square={true} elevation={23} style={{padding: "1em"}}>
      <Typography variant="h1" component="h1" align="center">
        The B.L.O.C.K.
      </Typography>
      <Typography variant="h4" component="h2" align="center">
        Flatiron School's Big-Ass List of Code Knowledge
      </Typography>
    </Paper>
  );
}
