import { createStore, combineReducers } from 'redux';
import appLogoSpeed from './reducers/appLogoSpeed';

export default createStore(combineReducers({
    appLogoSpeed
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);