import React, { Component } from "react";
import Login from "./components/Auth/login";
// import Form from "./components/Form/Form";

import Home from "./components/home";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { isAuthenticated } from "./respository";
import UsersContainer from "./components/UsersForm/UsersContainer";

class App extends Component {
  logOut() {
    localStorage.removeItem("x-access-token");
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid container">
              <div className="navbar-header"></div>
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                {isAuthenticated() ? (
                  <li>
                    <NavLink to="/form">FormAddUser</NavLink>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                {isAuthenticated() ? (
                  <li onClick={this.logOut}>
                    <a href="/">Log out</a>{" "}
                  </li>
                ) : (
                  <li>
                    <NavLink to="/login">Log in</NavLink>
                  </li>
                )}
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={UsersContainer} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;

