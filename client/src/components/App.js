import React, { Component } from "react";
import { withRouter } from "react-router";

import Sidebar from "./navigation/Sidebar";
import Routes from "./navigation/Routes";

class App extends Component {

  constructor(){
    super();
    this.state = {
      operatorLogged: false,
      operatorLoggedId: "",
      operatorLoggedName: ""
    }
  }


  // Keeping the operator logged in even if the page is refresh or opened in another tab
  componentDidMount(){
    const operatorLogged = localStorage.getItem('operatorLogged');
    const operatorLoggedId = localStorage.getItem('operatorLoggedId');
    const operatorLoggedName = localStorage.getItem('operatorLoggedName');

    if (operatorLogged) {
      this.logMethod(operatorLogged, operatorLoggedId, operatorLoggedName);
    }
  }


  // Method to log in the operator, passed through props to Login
  logMethod = (operatorLogged, operatorLoggedId, operatorLoggedName) => {
    this.setState({
      operatorLogged: operatorLogged,
      operatorLoggedId: operatorLoggedId,
      operatorLoggedName: operatorLoggedName
    });
  }

  render() {
    return(
      <div style={{ display: "flex" }}>
        { !this.state.operatorLogged ?
          <Sidebar log="Login" operatorLogged={this.state.operatorLogged} />
          : <Sidebar log="Logout" operatorLogged={this.state.operatorLogged} />
        }

        <div style={{ flexGrow: 1 }}>
          <Routes logMethod={this.logMethod} operatorLogged={this.state.operatorLogged} operatorLoggedId={this.state.operatorLoggedId} operatorLoggedName={this.state.operatorLoggedName} />
        </div>
      </div>
    );
  }
}



export default withRouter(App);
