import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import rootreducer from './components/reducers/rootReducer';
import thunk from 'redux-thunk'
import ErrorBoundary from '../src/components/error-boundaries';

let store = createStore(rootreducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
        <App />
        </ErrorBoundary>
        
        </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
