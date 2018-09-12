// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Files
import App from './App.jsx';
const composedEnhancers = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composedEnhancers(applyMiddleware(thunk))
)
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
