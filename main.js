import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Error from './error.jsx';
import MetaTag from './metatag.js';
require("babel-polyfill");





import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react'

const { persistor, store } = configureStore();

const LoadingStoreFromLocalStorage = () => {
  return <div><img style={{ width: "100%" }} src="/images/loading.gif" /></div>;
}
const onBeforeLift = () => {
  // take some action before the gate lifts
}


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}
      loading={<LoadingStoreFromLocalStorage />}
      onBeforeLift={onBeforeLift}>
      <BrowserRouter>
        <Error>
          <MetaTag />
          <App />
        </Error>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
