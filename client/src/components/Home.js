import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import hello from "../resources/hello.svg";

const styles = theme => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  img: {
    height: 300,
    marginTop: "20vh",
    marginBottom: theme.spacing.unit * 3
  }
});

const Home = ({ classes }) => (
  <div className={classes.root}>
    <img src={hello} alt="welcome" className={classes.img} />
    <Typography variant="h5" paragraph>
      Hi! Welcome to The Block!
    </Typography>
    <Typography variant="h6" paragraph>
      This is Flatiron School's Big-Ass List of Coding Knowledge!
    </Typography>
    <Typography>
      Do not hesitate to <a href="rukshan.uddin@gmail.com">contact me</a> if you
      would like!
    </Typography>
  </div>
);

export default withStyles(styles)(Home);
