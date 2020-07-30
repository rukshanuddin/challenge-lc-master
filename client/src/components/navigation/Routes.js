import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import Postes from "../Postes";
import Operators from "../Operators";
import Actions from "../Actions";
import Login from "../Login";
import NotFound from "../NotFound";
import Topics from "../Topics";
import Git from '../Topics/Git';
import Ai from '../Topics/Ai';
import RailsAPI from "../Topics/RailsAPI";
import CS from "../Topics/CS";
import VideoChannels from "../Topics/VideoChannels";
import Ruby from "../Topics/Ruby";
import JS from "../Topics/JS";
import Py from "../Topics/Py";
import SQL from "../Topics/SQL";
import Tst from "../Topics/Tst";
import GenDoc from "../Topics/GenDoc"
import Prod from '../Topics/Prod'
import CCL from '../Topics/CCL'
import OS from '../Topics/OS'
import Interview from '../Topics/Interview'
import WiT from "../Topics/WiT";
import Twit from '../Topics/Twit'
import Pod from "../Topics/Pod";
import Inspirational from '../Topics/Inspirational'
import ReactJS from '../Topics/ReactJS'
import FE from '../Topics/FE'
import Links from "../Links";
// import LinkList from '../LinkList'

class Routes extends Component {

  // method to log in the operator (passed from App, to Login, through props)
  logMethod = (operatorLogged, operatorLoggedId, operatorLoggedName) => {
    this.props.logMethod(operatorLogged, operatorLoggedId, operatorLoggedName);
  }

  render() {

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/operators" component={Operators} />
        <Route exact path="/postes" component={Postes} />
        <Route exact path="/topics" component={Topics} />
        <Route exact path="/topics/1" component={Git} />
        <Route exact path="/topics/2" component={Ai} />
        <Route exact path="/topics/3" component={RailsAPI} />
        <Route exact path="/topics/4" component={CS} />
        <Route exact path="/topics/5" component={VideoChannels} />
        <Route exact path="/topics/6" component={Ruby} />
        <Route exact path="/topics/7" component={JS} />
        <Route exact path="/topics/8" component={ReactJS} />
        <Route exact path="/topics/9" component={FE} />
        <Route exact path="/topics/10" component={SQL} />
        <Route exact path="/topics/11" component={Py} />
        <Route exact path="/topics/12" component={Tst} />
        <Route exact path="/topics/13" component={GenDoc} />
        <Route exact path="/topics/14" component={Prod} />
        <Route exact path="/topics/15" component={CCL} />
        <Route exact path="/topics/16" component={OS} />
        <Route exact path="/topics/17" component={Interview} />
        <Route exact path="/topics/18" component={WiT} />
        <Route exact path="/topics/19" component={Twit} />
        <Route exact path="/topics/20" component={Pod} />
        <Route exact path="/topics/21" component={Inspirational} />
        <Route exact path="/topics/20" component={Pod} />
        <Route exact path="/links" component={Links} />
        {/* <Route exact path="/links/all" component={LinkList} /> */}
        {/* If the user goes to the page /actions whitout being logged in, he is redirected to /login */}
        <Route
          exact
          path="/actions"
          render={() =>
            localStorage.getItem("operatorLogged") ? (
              <Actions operatorLoggedId={this.props.operatorLoggedId} />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={() => (
            <Login
              logMethod={this.logMethod}
              operatorLogged={this.props.operatorLogged}
              operatorLoggedName={this.props.operatorLoggedName}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
