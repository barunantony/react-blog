import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.scss';
import { Blog, BlogForm, Menu } from './components';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Menu} />
            <Route path="/test" component={() => <div>blank</div>} />
            <Route path="/blog" component={Blog} />
            <Route path="/add-blog" component={BlogForm} />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();