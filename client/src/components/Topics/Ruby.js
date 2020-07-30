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

class Ruby extends Component {
  static propTypes = {
    fetchRuby: PropTypes.func,

    links: PropTypes.array,

    loading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.fetchRuby();
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
          <GridList cellHeight={250} className="RubyList">
            <GridListTile
              key="Subheader"
              cols={2}
              style={{ textAlign: "center", height: "auto", padding: "2em" }}
            >
              <Typography variant="h2" component="h3" align="center">
                Ruby
              </Typography>
              <Typography variant="subtitle1" component="p" align="center">
                Click on a tile to see the links available for that topic!
              </Typography>
            </GridListTile>

            {_.map(links, (link) => {
              debugger;
              return (
                <GridListTile
                  onClick={() =>
                    this.props.history.push(`/links/${link.attributes.id}`)
                  }
                  key={link.attributes.id}
                  cols={1}
                  style={{
                    padding: "10px",
                    margin: "auto",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <Link
                    to={{
                      pathname: `/topics/${link.attributes.id}`,
                    }}
                  >
                    <GridListTileBar
                      title={<h2>{link.attributes.name}</h2>}
                      subtitle={<span>{link.attributes.link}</span>}
                    >
                      {" "}
                      {link.attributes.name}
                    </GridListTileBar>
                  </Link>
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
  links: state.Ruby.models,

  loading: state.Ruby.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRuby: () => {
    dispatch(
      railsActions.index({
        resource: "Ruby",
      })
    );
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Ruby);
