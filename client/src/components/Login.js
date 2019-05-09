import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { railsActions } from "redux-rails";
import {
  CircularProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";

const styles = theme => ({
  progress: {
    margin: "auto",
    marginTop: theme.spacing.unit * 4,
    width: "fit-content",
  },
  root: {
    margin: theme.spacing.unit * 3
  },
  todo: {
    marginTop: theme.spacing.unit * 4
  }
});

class Login extends Component {

  constructor() {
    super();
    this.state = {
      operatorId: "",
      operatorName: "",
      operatorIsSelected: false
    };
  }

  static propTypes = {
    fetchOperators: PropTypes.func,
    operators: PropTypes.array,
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetchOperators();
  }


  // method to keep the selected operator in state before the user validates
  handleChange = (e) => {
    const operator = JSON.parse(e.target.value);

    Promise.resolve()
      .then( () => {
        this.setState({
          operatorId: operator.operatorId,
          operatorName: operator.operatorName
        });
      }).then( () => {
        if (this.state.operatorId === "") {
          this.setState({ operatorIsSelected: false });
        } else {
          this.setState({ operatorIsSelected: true });
        }
      })
  }


  // method to log in the operator (passed from App through props)
  login = (e) => {
    e.preventDefault();
    this.props.logMethod(true, this.state.operatorId, this.state.operatorName);
    localStorage.setItem('operatorLogged', true);
    localStorage.setItem('operatorLoggedId', this.state.operatorId);
    localStorage.setItem('operatorLoggedName', this.state.operatorName);
  }


  // log out the operator, cleaning the local storage
  logout = () => {
    this.props.logMethod(false, "", "");
    this.setState({
      operatorId: "",
      operatorName: "",
      operatorIsSelected: false
    })
    localStorage.clear();
  }


  render() {
    const { classes, loading, operators } = this.props;

    if (loading) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={32} />
        </div>
      );
    }

    return (
      <div className={classes.root}>
        {!this.props.operatorLogged ?
          <form method="post" onSubmit={this.login}>
            <label htmlFor="pick-operator">Select the operator</label>
            <div>
              <select id="pick-operator" name="pick-operator" onChange={this.handleChange}>
                <option value={JSON.stringify({ operatorId: "", operatorName: "" })}> Select an operator </option>
                {_.map(operators, operator => (
                  <option key={operator.id} value={JSON.stringify({ operatorId: operator.id, operatorName: operator.attributes.name })} > {operator.attributes.name} </option>
                ))}
              </select>
            </div>
            <div>
              <button disabled={!this.state.operatorIsSelected} type="submit">Login</button>
            </div>
          </form>
          :
          <div>
            <h1>You are logged in as {this.props.operatorLoggedName}</h1>
            <button onClick={this.logout}>Logout</button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  operators: state.Operators.models,
  loading: state.Operators.loading
});

const mapDispatchToProps = dispatch => ({
  fetchOperators: () => {
    dispatch(railsActions.index({ resource: "Operators" }));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Login);
