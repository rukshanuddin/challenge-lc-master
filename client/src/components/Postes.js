import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { railsActions } from "redux-rails";
import {
  CircularProgress,
  Table,
  TableBody,
  TableRow,
  TableCell
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
  text: {
    textTransform: "capitalize"
  },
  todo: {
    marginTop: theme.spacing.unit * 4
  },
  cell: {
    fontSize: 16
  }
});

class Postes extends Component {
  static propTypes = {
    fetchPostes: PropTypes.func,
    fetchOperatorsPoste: PropTypes.func,
    postes: PropTypes.array,
    operatorsPoste: PropTypes.array,
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetchPostes();
    this.props.fetchOperatorsPoste();
  }

  render() {
    const { classes, loading, postes, operatorsPoste } = this.props;

    if (loading) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={32} />
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <Table>
          <TableBody>
            {_.map(postes, poste => {
              let counter = 0;
              {_.map(operatorsPoste, operatorPoste => {
                if (operatorPoste.attributes.poste_id === poste.id ) {
                  counter += 1;
                }
              })}
              return(
                <TableRow key={`row${poste.id}`}>
                  <TableCell key={`name${poste.id}`} className={classes.cell}>{poste.attributes.category}</TableCell>
                  <TableCell key={`count${poste.id}`} className={classes.cell}>{counter}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postes: state.Postes.models,
  operatorsPoste: state.OperatorsPoste.models,
  loading: state.Postes.loading
});

const mapDispatchToProps = dispatch => ({
  fetchPostes: () => {
    dispatch(railsActions.index({ resource: "Postes" }));
  },
  fetchOperatorsPoste: () => {
    dispatch(railsActions.index({ resource: "OperatorsPoste" }));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Postes);
