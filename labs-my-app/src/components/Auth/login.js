import React from "react";
import { login } from "../../respository";
import s from "./Login.module.css";

let Login = props => {
  let nameElements = React.createRef();
  let passElements = React.createRef();

  let onTextChange = () => {
    debugger;
    let nameText = nameElements.current.value;
    let passText = passElements.current.value;
    props.updateNewLoginText(nameText, passText);
  };

  let submitLogins = event => {
    props.updateNewLoginText("", "");
    event.preventDefault();
    login(props.loginData)
      .then(token => (window.location = "/"))
      .catch(err => alert(err));
  };

  return (
    <div>
      <hr />

      <form className={s.form}>
        <div className ={s.name}>
          <h>Log in</h>
        </div>
        <p className={s.clearfix}>
          <label for="login">UserName:</label>
          <input
            name="login"
            id="login"
            placeholder="Логин"
            type="text"
            value={props.nameNewText}
            onChange={onTextChange}
            ref={nameElements}
          />
        </p>
        <p className={s.clearfix}>
          <label for="password">Password:</label>
          <input
            name="password"
            id="password"
            placeholder="Пароль"
            type="password"
            value={props.passNewText1}
            onChange={onTextChange}
            ref={passElements}
          />
        </p>
        <p className={s.clearfix}>
          <button type="submit" onClick={submitLogins}>
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
