import 'element-closest';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

import './firebase';

import keymap from './constants/keymap';
import { APP_ROOT_SELECTOR } from './constants/dom';
import AppContainer from './containers/AppContainer';
import store from './store';
import ShortcutProvider from './containers/ShortcutProvider';

const rootEl = document.querySelector(APP_ROOT_SELECTOR);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ShortcutProvider keymap={keymap}>
        <AppContainer />
      </ShortcutProvider>
    </ConnectedRouter>
  </Provider>,
  rootEl
);
