import { createStore, combineReducers } from 'redux';
import appLogoSpeed from './reducers/appLogoSpeed';

export default createStore(combineReducers({
    appLogoSpeed
}));