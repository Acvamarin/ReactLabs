
export const AddUserActionCreator = () => ({ type: ADD_USER });
export const RemoveUserActionCreator = id => ({ type: REMOVE_USER, id: id });
export const updateNewUserTextActionCreator = (text, text1, text2) => ({
    type: UPDATE_NEW_USER_TEXT,
    NewText: text,
    NewText1: text1,
    NewText2: text2
});