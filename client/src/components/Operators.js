import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { railsActions } from "redux-rails";
import {
  CircularProgress,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
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
  },
  cell: {
    fontSize: 16
  }
});

class Operators extends Component {
  static propTypes = {
    fetchOperators: PropTypes.func,
    fetchOperatorsPoste: PropTypes.func,
    fetchPostes: PropTypes.func,
    operators: PropTypes.array,
    operatorsPoste: PropTypes.array,
    postes: PropTypes.array,
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetchOperators();
    this.props.fetchOperatorsPoste();
    this.props.fetchPostes();
  }

  render() {
    const { classes, loading, operators, operatorsPoste, postes } = this.props;

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
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}/>
              {_.map(postes, poste => {
                return(
                  <TableCell key={`head${poste.id}`} className={classes.cell}>
                    {poste.attributes.category}
                  </TableCell>
                );
              })}
              <TableCell className={classes.cell}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(operators, operator => {
              let total = 0;
              return(
                <TableRow key={`row${operator.id}`}>
                  <TableCell key={`cell${operator.id}`} className={classes.cell} style={{display: 'flex', alignItems: 'center'}}>
                    <ListItemAvatar>
                      <Avatar alt={`Avatar ID ${operator.id}`} />
                    </ListItemAvatar>
                    <ListItemText inset primary={operator.attributes.name} />

                  </TableCell>
                    {_.map(postes, poste => {
                      let counter = 0;
                      {_.map(operatorsPoste, operatorPoste => {
                        if (operatorPoste.attributes.operator_id === operator.id && operatorPoste.attributes.poste_id === poste.id) {
                          counter += 1;
                          total += 1;
                        }
                      })}
                      return(
                        <TableCell key={`cell${poste.id}`}className={classes.cell}>{counter}</TableCell>
                      );
                    })}
                  <TableCell key={`count${operator.id}`} className={classes.cell}>{total}</TableCell>
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
  operators: state.Operators.models,
  operatorsPoste: state.OperatorsPoste.models,
  postes: state.Postes.models,
  loading: state.Operators.loading
});

const mapDispatchToProps = dispatch => ({
  fetchOperators: () => {
    dispatch(railsActions.index({ resource: "Operators" }));
  },
  fetchOperatorsPoste: () => {
    dispatch(railsActions.index({ resource: "OperatorsPoste" }));
  },
  fetchPostes: () => {
    dispatch(railsActions.index({ resource: "Postes" }));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Operators);
