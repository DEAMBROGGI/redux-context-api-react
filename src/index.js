import React from 'react';
import {render} from 'react-dom';
import './styles/index.css';
import App from './App';
import { StateProvider } from './core/Context/StateProvider';
import reducer, {initialState} from './core/Context/reducer'
import { Provider } from 'react-redux';
import store from './core/redux/index';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const customHistory = createBrowserHistory();

render(
  
 
   <Router history={customHistory}>
  <Provider store={store}>
  <StateProvider initialState={initialState } reducer = {reducer}>
    <App className="App"/>
    </StateProvider>
  </Provider>
  </Router>,
  document.getElementById('root')
  
);



