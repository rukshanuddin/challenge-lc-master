import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { railsActions } from "redux-rails";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";

const styles = theme => ({
  progress: {
    margin: "auto",
    marginTop: theme.spacing.unit * 4,
    width: "fit-content"
  },
  root: {
    margin: theme.spacing.unit * 3
  },
  todo: {
    marginTop: theme.spacing.unit * 4
  }
});

class Operators extends Component {
  static propTypes = {
    fetchOperators: PropTypes.func,
    fetchProducts: PropTypes.func,
    operators: PropTypes.array,
    products: PropTypes.array,
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetchOperators();
    this.props.fetchProducts();
  }

  render() {
    const { classes, loading, operators, products } = this.props;

    if (loading) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={32} />
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <List>
          {_.map(operators, operator => (
            <ListItem key={operator.id}>
              <ListItemAvatar>
                <Avatar alt={`Avatar ID ${operator.id}`} />
              </ListItemAvatar>
              <ListItemText inset primary={operator.attributes.name} />
            </ListItem>
          ))}
        </List>
        <Typography className={classes.todo}>
          <em>
            TODO :<br />
            Lien vers dashboard personnel avec suivi des points
          </em>
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  operators: state.Operators.models,
  products: state.Products.models,
  loading: state.Operators.loading
});

const mapDispatchToProps = dispatch => ({
  fetchOperators: () => {
    dispatch(railsActions.index({ resource: "Operators" }));
  },
  fetchProducts: () => {
    dispatch(railsActions.index({ resource: "Products" }));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Operators);
