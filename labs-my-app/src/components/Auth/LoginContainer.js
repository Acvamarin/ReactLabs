import { updateNewLoginTextActionCreator } from "../../redux/login-reducer";
import Login from "./Login";
import { connect } from "react-redux";
let mapStateToProps = state => {
  return {
    loginData: state.loginPage,
    nameNewText: state.loginPage.name,
    passNewText1: state.loginPage.password
  };
};
let mapDispatchToProps = dispatch => {
  return {
    updateNewLoginText: (nameText, passText) => {
      dispatch(updateNewLoginTextActionCreator(nameText, passText));
    }
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
