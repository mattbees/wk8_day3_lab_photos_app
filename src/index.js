import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/Main';
import * as serviceWorker from './serviceWorker';
import photosReducer from './reducers/photos_reducer';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import photosData from './data/photos_data';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const thisState = {
  photos: photosData,
  category: null
}


const store = createStore(photosReducer, thisState, composeEnhancers());

ReactDOM.render(
  <Provider store={ store }>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
