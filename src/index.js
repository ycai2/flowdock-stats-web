import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './containers/root';
import configureStore from './store/configure-store';
import registerServiceWorker from './register-service-worker';
import rootSaga from './sagas'

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga)

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();
