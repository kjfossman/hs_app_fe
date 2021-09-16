import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import userReducer from './reducers/userReducer.js'
import loginReducer from './reducers/loginReducer.js'

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
    users: userReducer,
    login: loginReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools))

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <div>
   
        <App store={store}/>
      </div>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
