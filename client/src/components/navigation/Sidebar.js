import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import ComputerIcon from "@material-ui/icons/Computer";
import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    padding: theme.spacing.unit * 3
  },
  link: {
    textDecoration: "none"
  },
  active: {
    "&> div": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  }
});

const Sidebar = (props) => (

  <Drawer
    variant="permanent"
    classes={{
      root: props.classes.drawer,
      paper: props.classes.drawerPaper
    }}
    anchor="left"
  >
    <List>
      <NavLink
        exact
        to="/"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/postes"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Postes" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/operators"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Operators" />
        </ListItem>
      </NavLink>
      {
        props.operatorLogged?
          <NavLink
            exact
            to="/actions"
            className={props.classes.link}
            activeClassName={props.classes.active}
          >
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Actions" />
            </ListItem>
          </NavLink>
        : null
      }

      <NavLink
        exact
        to="/login"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={props.log} />
        </ListItem>
      </NavLink>
    </List>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
