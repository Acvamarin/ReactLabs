
let initialState = {
  loginData: [
    { id: 1, name: "Kirill", pass: 123 },
    { id: 2, name: "Maksim", pass: 1234 }
  ],
  nameNewText: "",
  passNewText1: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
 

    default:
      return state;
  }
};

export default loginReducer;
