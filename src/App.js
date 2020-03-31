import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createRootReducer from './state/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const store=createStore(createRootReducer(),composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Layout></Layout>
    </div>
    </Provider>
  );
}

export default App;
