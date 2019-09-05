import React,{ Suspense } from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { useSSR } from 'react-i18next';
import App from './containers/app';
import setupStore from './state/store';
import './i18n';
const { BrowserRouter } = require('react-router-dom');

const store = setupStore(window.__PRELOADED_STATE__);

const BaseApp = () => {
  useSSR(window.initialI18nStore, window.initialLanguage);
  return (
    <Provider store={store}>
    <Suspense fallback={<div>Still loading i18n...</div>}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Suspense>
    </Provider>
  );
}

hydrate(
  <BaseApp />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/app');
}
