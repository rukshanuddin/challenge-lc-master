import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../Home";
import Postes from "../Postes";
import Operators from "../Operators";
import Actions from "../Actions";
import Login from "../Login";
import NotFound from "../NotFound";


class Routes extends Component {

  // method to log in the operator (passed from App, to Login, through props)
  logMethod = (operatorLogged, operatorLoggedId, operatorLoggedName) => {
    this.props.logMethod(operatorLogged, operatorLoggedId, operatorLoggedName);
  }

  render() {

    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/operators" component={Operators} />
        <Route exact path="/postes" component={Postes} />
        {/* If the user goes to the page /actions whitout being logged in, he is redirected to /login */}
        <Route exact path="/actions" render={ () =>
          localStorage.getItem('operatorLogged') ?
          <Actions operatorLoggedId={this.props.operatorLoggedId} />
          : <Redirect to={{ pathname: "/login"}} />
        }

        />
        <Route exact path="/login" render={ () => <Login logMethod={this.logMethod} operatorLogged={this.props.operatorLogged} operatorLoggedName={this.props.operatorLoggedName} /> } />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
