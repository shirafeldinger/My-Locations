import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { createStore } from "redux"
import { ActionTypes, LocationActions, MyLocationState } from './types';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
import { PersistPartial } from 'redux-persist/lib/persistReducer';

const initialState = {
  categories: [],
  locations: [],
  categorySelected: ''
};

const reducer = (state: MyLocationState = initialState, action: LocationActions): MyLocationState => {
  switch (action.type) {
    case ActionTypes.setCategory:
      return { ...state, categories: action.categories }
    case ActionTypes.setLocations:
      return { ...state, locations: action.locations }
    case ActionTypes.setCategorySelected:
      return { ...state, categorySelected: action.categorySelected }
    default:
      return state;
  };
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['categories', 'locations']
};


const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore<MyLocationState & PersistPartial, any, any, any>(persistedReducer);
const persistor = persistStore(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
