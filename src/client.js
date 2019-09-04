import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import setupStore from './state/store';

const { BrowserRouter } = require('react-router-dom');

const store = setupStore(window.__PRELOADED_STATE__);


hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/app');
}
