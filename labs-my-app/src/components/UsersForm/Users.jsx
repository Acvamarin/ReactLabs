import React from "react";
import s from "./Users.module.css";
const Users = props => {
  let onRemoveUser = id => {
    props.RemoveUser(id);
  };
  let messagesElements = props.usersData.map((el, i) => {
    return (
      <tr key={i}>
        <td>{el.name}</td>
        <td>{el.lastName}</td>
        <td>{el.email}</td>
        <td>
          <div className={s.form}>
            <button onClick={() => onRemoveUser(el.id)}>Remove</button>
          </div>
        </td>
      </tr>
    );
  });
  let textElements = React.createRef();
  let textElements1 = React.createRef();
  let textElements2 = React.createRef();
  let onAddUser = e => {
    e.preventDefault();
    props.AddUser();
  };

  let onTextChange = () => {
    let text = textElements.current.value;
    let text1 = textElements1.current.value;
    let text2 = textElements2.current.value;

    props.updateNewUserText(text, text1, text2);
  };
  return (
    <div className={s.container}>
      <div>
      <h1> Form add Users </h1>
      </div>

      <form>
        <div className={s.form}>
          <div className={s.block}>
            <div className={s.item}>
              <div>
                <label>Name</label>
              </div>
              <textarea
                onChange={onTextChange}
                ref={textElements}
                value={props.newText}
              />
            </div>
            <div className={s.item}>
              <div>
                <label>lastName</label>
              </div>
              <textarea
                onChange={onTextChange}
                ref={textElements1}
                value={props.newText1}
              />
            </div>
            <div className={s.item}>
              <div>
                <label>email</label>
              </div>
              <textarea
                onChange={onTextChange}
                ref={textElements2}
                value={props.newText2}
              />
            </div>

            <button onClick={onAddUser}>Add User</button>
          </div>
        </div>
      </form>
      <div className={s.table}>
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{messagesElements}</tbody>
        </table>
      </div>
    </div>
  );
};
export default Users;
