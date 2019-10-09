import React, { Component } from "react";
import TextForm from "../TextForm/TextForm";
import Users from "../Users/Users";

import s from "./App.module.css";

class App extends Component {
  state = {
    users: []
  };

  removeUser = index => {
    const { users } = this.state;

    this.setState({
      users: users.filter((user, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = user => {
    this.setState({ users: [...this.state.users, user] });
  };

  render() {
    const { users } = this.state;

    return (
      <div className={s.container}>
        <div className={s.block}>
          <TextForm handleSubmit={this.handleSubmit} />
        </div>
        <div className={s.block}>
          <Users characterData={users} removeUser={this.removeUser} />
        </div>
      </div>
    );
  }
}

export default App;
