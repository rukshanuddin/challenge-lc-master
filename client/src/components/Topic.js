import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { railsActions } from "redux-rails";
import {
  CircularProgress,
  Paper,
  GridList,
  GridListTile,
  Typography,
  GridListTileBar,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";

const styles = (theme) => ({
  progress: {
    width: "fit-content",
  },
  root: {
    margin: theme.spacing.unit * 3,
  },
  text: {
    textTransform: "capitalize",
  },
  todo: {
    marginTop: theme.spacing.unit * 4,
  },
  cell: {
    fontSize: 16,
  },
});

class Topic extends Component {
  static propTypes = {
    fetchTopic: PropTypes.func,

    links: PropTypes.array,

    loading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.fetchTopic();
  }
  render() {
    const { classes, loading, links } = this.props;

    if (loading) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={32} />
        </div>
      );
    }

    return (
      <div style={{ align: "center" }}>
        <Paper elevation={24} square={true}>
          <GridList cellHeight={250} className="TopicList">
            <GridListTile
              key="Subheader"
              cols={2}
              style={{ textAlign: "center", height: "auto", padding: "2em" }}
            >
              <Typography variant="h2" component="h3" align="center">
                Topic
              </Typography>
              <Typography variant="subtitle1" component="p" align="center">
                Click on a tile to see the links available for that topic!
              </Typography>
            </GridListTile>

            {_.map(links, link => {
debugger
                return (
                  <GridListTile
                    key={link.id}
                    cols={2}
                    style={{
                      textAlign: "center",
                      height: "auto",
                      padding: "2em",
                    }}
                  >
                    <GridListTileBar
                      key={link.attributes.id}
                      title={<h2>{link.attributes.name}</h2>}
                      subtitle={<span>{link.attributes.name}</span>}
                    >
                      {" "}
                      {link.attributes.name}
                    </GridListTileBar>
                  </GridListTile>
                );
            })}
          </GridList>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  links: state.Topic.models,

  loading: state.Topic.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTopic: () => {
    dispatch(
      railsActions.index({
        resource: "Topic",
      })
    );
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Topic);
