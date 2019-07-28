import { createStore, combineReducers } from 'redux';
import flightDetails from './reducers/flightDetails';

export default createStore(combineReducers({
    flightDetails
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);