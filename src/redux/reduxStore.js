import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loginReducer from './reducers/loginReducer.js';
import contentReducer from './reducers/contentReducer.js';

const reducers = combineReducers({
    loginReducer,
    contentReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;