import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import PersonIcon from "@material-ui/icons/Person";
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
      paper: props.classes.drawerPaper,
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
        to="/topics"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Topics" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/1"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Git" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/2"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="AI and ML" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/3"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="RailsAPI" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/4"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Computer Science" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/5"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Video Channels" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/6"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Ruby" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/7"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Javascript" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/8"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="React JS" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/9"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Frontend" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/10"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="SQL" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/11"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Python" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/12"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Testing Tools" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/13"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="General Documentation + Tools" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/14"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Productivity Tools" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/15"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Continued Learning + Communities" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/16"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Operating Systems" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/17"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Interview Prep and Practice" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/18"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Women in Tech" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/19"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Twitter Accounts" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/20"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Podcasts" />
        </ListItem>
      </NavLink>
      <NavLink
        exact
        to="/topics/21"
        className={props.classes.link}
        activeClassName={props.classes.active}
      >
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Inspirational Lectures" />
        </ListItem>
      </NavLink>

      {/* <NavLink
        exact
        to="/operators"
        className={props.classes.link}
        activeClassName={props.classes.active}
      > */}
      {/* <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Operators" />
        </ListItem>
      </NavLink> */}
      {/* {props.operatorLogged ? (
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
      ) : null} */}

      {/* <NavLink
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
      </NavLink> */}
    </List>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
