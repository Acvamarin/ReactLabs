export const UPDATE_NEW_LOGIN_TEXT = "UPDATE-NEW-LOGIN-TEXT";
let initialState = {
  name: "",
  password: ""
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_LOGIN_TEXT:
      debugger;
      return {
        ...state,
        name: action.nameNewText,
        password: action.passNewText1
      };

    default:
      return state;
  }
};
export const updateNewLoginTextActionCreator = (nameText, passText) => ({
  type: UPDATE_NEW_LOGIN_TEXT,
  nameNewText: nameText,
  passNewText1: passText
});

export default loginReducer;
