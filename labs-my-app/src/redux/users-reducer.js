const ADD_USER = "ADD-USER";
const REMOVE_USER = "REMOVE-USER";
const UPDATE_NEW_USER_TEXT = "UPDATE-NEW-USER-TEXT";
let initialState = {
  usersData: [
    { id: 1, name: "Kirill",lastName: "Ivanov", email: "@dur" },
    { id: 2, name: "Maksim",  lastName: "Ivanov", email: "@dur1" }
  ],
  newText: "",
  newText1: "",
  newText2: ""
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return {
        ...state,
        usersData: [...state.usersData].filter(el => el.id !== action.id)
      };

    case ADD_USER:
      return {
        ...state,
        usersData: [
          ...state.usersData,
          { id: state.usersData.length + 1, name: state.newText, lastName: state.newText1, email: state.newText2}
        ]
      };

    case UPDATE_NEW_USER_TEXT:
      return {
        ...state,
        newText: action.NewText,
        newText1: action.NewText1,
        newText2: action.NewText2
      };

    default:
      return state;
  }
};

export const AddUserActionCreator = () => ({ type: ADD_USER });
export const RemoveUserActionCreator = id => ({ type: REMOVE_USER, id: id });
export const updateNewUserTextActionCreator = (text, text1, text2) => ({
  type: UPDATE_NEW_USER_TEXT,
  NewText: text,
  NewText1: text1,
  NewText2: text2
});
export default  usersReducer;
