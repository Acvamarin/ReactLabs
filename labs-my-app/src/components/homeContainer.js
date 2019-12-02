import { updateNewLoginTextActionCreator, loginActionCreator } from "../redux/login-reducer";
import Home from "./home";
import { connect } from "react-redux";
let mapStateToProps = state => {
  return {
    auth: state.loginPage.loginData[0].auth,
    nameNewText: state.loginPage.nameNewText,
    passNewText1: state.loginPage.passNewText1
  };
};
let mapDispatchToProps = dispatch => {
  return {
    updateNewLoginText: (nameText, passText) => {
      dispatch(updateNewLoginTextActionCreator(nameText, passText));
    },
    login: () => {
      dispatch(loginActionCreator());
      dispatch(updateNewLoginTextActionCreator('', ''));
    }
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
