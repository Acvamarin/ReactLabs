export const UPDATE_NEW_LOGIN_TEXT = "UPDATE-NEW-LOGIN-TEXT";
export const AUTH = "AUTH";
let initialState = {
  loginData: [
    { id: 1, name: "q", pass: "q", auth: false },
    { id: 2, name: "Maksim", pass: "1234", auth: false }
  ],
  nameNewText: "",
  passNewText1: ""
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_LOGIN_TEXT:
      debugger;
      return {
        ...state,
        nameNewText: action.nameNewText,
        passNewText1: action.passNewText1
      };
    case AUTH:
      if (
        state.nameNewText == state.loginData[0].name &&
        state.nameNewText == state.loginData[0].pass
      ) {
        return {
          ...state,
          loginData: [state.loginData[0], { auth: true }]
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
export const loginActionCreator = () => ({
  type: AUTH
});
export const updateNewLoginTextActionCreator = (nameText, passText) => ({
  type: UPDATE_NEW_LOGIN_TEXT,
  nameNewText: nameText,
  passNewText1: passText
});

export default loginReducer;
