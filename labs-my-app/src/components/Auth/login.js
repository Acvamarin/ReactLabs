import React from "react";
import { login } from "../../respository";
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
      <div>
        <div>
          <div>
            <h3>Log in </h3>
          </div>
          <div>
            <form>
              <div>
                <label>Name:</label>
                <input
                  value={props.nameNewText}
                  onChange={onTextChange}
                  ref={nameElements}
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  value={props.passNewText1}
                  onChange={onTextChange}
                  ref={passElements}
                />
              </div>
              <button type="submit" onClick={submitLogins}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
