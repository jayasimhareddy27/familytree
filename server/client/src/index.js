import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {reducers} from './redux/reducers/index.js';

const store=createStore(reducers,compose(applyMiddleware(thunk)));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Provider store={store}>
            <App /> 
        </Provider>
  </BrowserRouter>
);

