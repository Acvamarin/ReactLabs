import React from "react";
import s from "./Users.module.css";
const Users = props => {
  let onRemoveUser = id => {
    props.RemoveUser(id);
  };
  let messagesElements = props.usersData.map(el => {
    return (
      <div className={s.item}>
        <img src="https://oboi.ws/wallpapers/27_11168_oboi_surovyj_paren_s_sigaroj_2560x2048.jpg"></img>
        {el.name}
        {el.lastName}
        {el.email}
        <button onClick={() => onRemoveUser(el.id)}>Remove</button>
      </div>
    );
  });
  let textElements = React.createRef();
  let textElements1 = React.createRef();
  let textElements2 = React.createRef();
  let onAddUser = () => {
    props.AddUser();
  };

  let onTextChange = () => {
    let text = textElements.current.value;
    let text1 = textElements1.current.value;
    let text2 = textElements2.current.value;

    props.updateNewUserText(text, text1, text2);
  };
  return (
    <div>
      <h4>add Users </h4>
      <div>
        <div>
          <textarea
            onChange={onTextChange}
            ref={textElements}
            value={props.newText}
          />
          <textarea
            onChange={onTextChange}
            ref={textElements1}
            value={props.newText1}
          />
          <textarea
            onChange={onTextChange}
            ref={textElements2}
            value={props.newText2}
          />
        </div>
        <div>
          <button onClick={onAddUser}>Add post</button>
        </div>
      </div>
      <div className={s.users}>{messagesElements}</div>
    </div>
  );
};
export default Users;
