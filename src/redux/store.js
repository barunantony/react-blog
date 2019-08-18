import { createStore, combineReducers } from 'redux';
import blogs from './reducers/blogs';

export default createStore(combineReducers({
    blogs
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);