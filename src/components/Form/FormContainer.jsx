import { connect } from "react-redux";
import { loginUserTC } from "../../redux/reducers/loginReducer";
import Form from './Form.jsx';

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginReducer.isAuth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (login, password) => dispatch(loginUserTC(login, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);