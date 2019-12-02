import React from "react";

let Home = props => {
  let nameElements = React.createRef();
  let passElements = React.createRef();

  let onTextChange = () => {
    debugger;
    let nameText = nameElements.current.value;
    let passText = passElements.current.value;
    props.updateNewLoginText(nameText, passText);
  };
  
  let submitLogin = e => {
    e.preventDefault();
    props.login();  
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
              <button type="submit" onClick={submitLogin}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
