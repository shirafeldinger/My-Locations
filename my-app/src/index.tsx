import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { createStore } from "redux"
import { ActionTypes, LocationActions, MyLocationState } from './types';

const initialState = {
  categories: ['a', 'b', 'c'],
  locations: [],
  categoryChosen: ''
};

const reducer = (state: MyLocationState = initialState, action: LocationActions): MyLocationState => {
  switch (action.type) {
    case ActionTypes.setCategory:
      return { ...state, categories: action.categories }
    case ActionTypes.setLocations:
      return { ...state, locations: action.locations }
    default:
      return state;
  };
};
let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
