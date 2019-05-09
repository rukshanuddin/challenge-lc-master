import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { railsActions } from "redux-rails";
import {
  CircularProgress
} from "@material-ui/core";
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";
import Pickup from "./Pickup";
import Checkup from "./Checkup";
import Packup from "./Packup";

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
  pickup: {
    backgroundColor: red['A100']
  },
  checkup: {
    backgroundColor: indigo['A200']
  },
  packup: {
    backgroundColor: teal[400]
  }
});

class Actions extends Component {

  constructor() {
    super();
    this.state = {
      poste: ""
    }
  }

  static propTypes = {
    fetchPostes: PropTypes.func,
    addActions: PropTypes.func,
    postes: PropTypes.array,
    loading: PropTypes.bool
  };


  componentDidMount() {
    this.props.fetchPostes();
  }

  // method to keep the selected poste in state
  handleChange = (e) => {
    const poste = e.target.value

    Promise.resolve()
      .then( () => {
        this.setState({
          poste: poste
        })
      }).then( () => {
        document.querySelector('#actions').classList.remove(this.props.classes.pickup);
        document.querySelector('#actions').classList.remove(this.props.classes.checkup);
        document.querySelector('#actions').classList.remove(this.props.classes.packup);

        if (this.state.poste === "1") {
          document.querySelector('#actions').classList.add(this.props.classes.pickup);
        } else if (this.state.poste === "2") {
          document.querySelector('#actions').classList.add(this.props.classes.checkup);
        } else if (this.state.poste === "3") {
          document.querySelector('#actions').classList.add(this.props.classes.packup);
        }
      })
  }

  // method to post the actions executed to the table operators_postes
  addActions = () => {
    this.props.addActions(this.props.operatorLoggedId, this.state.poste);
  }


  render() {
    const { classes, loading, postes } = this.props;

    if (loading) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={32} />
        </div>
      );
    }

    return (
      <div id="actions" className={classes.root}>
        <h2>Select a poste</h2>
        <select id="pick-poste" name="pick-poste" onChange={this.handleChange}>
          <option value=""> Select a poste </option>
          {_.map(postes, poste => (
            <option key={poste.id} value={poste.id} > {poste.attributes.category} </option>
          ))}
        </select>

        {/* displaying the component Pickup/Checkup/Packup according to the poste in state */}
        {this.state.poste === "1" ?
          <Pickup addActions={this.addActions} />
          : null
        }
        {this.state.poste === "2" ?
          <Checkup addActions={this.addActions} />
          : null
        }
        {this.state.poste === "3" ?
          <Packup addActions={this.addActions} />
          : null
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  postes: state.Postes.models,
  operators_poste: state.OperatorsPoste.models,
  loading: state.Postes.loading
});

const mapDispatchToProps = dispatch => ({
  fetchPostes: () => {
    dispatch(railsActions.index({ resource: "Postes" }));
  },
  addActions: (operatorId, posteId) => {
    dispatch(railsActions.create({
      resource: "OperatorsPoste",
      attributes: {
        operator_id: operatorId,
        poste_id: posteId
      }
    }));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Actions);
