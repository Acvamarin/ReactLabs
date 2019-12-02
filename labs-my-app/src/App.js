import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { isAuthenticated } from "./respository";
import UsersContainer from "./components/UsersForm/UsersContainer";
import LoginContainer from "./components/Auth/LoginContainer";
import Home from "./components/home";

class App extends Component {
  logOut() {
    localStorage.removeItem("x-access-token");
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <div>
              <div></div>
              <ul>
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
              <ul>
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
          <Route exact path="/login" component={LoginContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
