const LOGIN_USER = 'login/LOGIN_USER';
const LOGOUT_USER = 'login/LOGOUT_USER';

let initialState = {
    login: '',
    password: '',
    isAuth: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case LOGOUT_USER:
            return {
                ...state,
                login: '',
                password: '',
                isAuth: false,
            }
        default:
            return state;
    }
}

export const loginUserAC = (login, password) => ({ type: LOGIN_USER, data: { login, password } });
export const logoutUserAC = () => ({ type: LOGOUT_USER });

export const loginUserTC = (login, password) => {
    return dispatch => {
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res => res.json())
            .then(json => dispatch(loginUserAC(json)))
    }
}

export default loginReducer;