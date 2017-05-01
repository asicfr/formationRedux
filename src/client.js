/* eslint no-underscore-dangle: "off" */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { trigger } from 'redial';
import { Router, browserHistory, match } from 'react-router';
import 'es6-shim';
import createStore from 'store';
import getRoutes from 'routes';
import './styles/main.scss';

// Creation du store tel que configure
const store = createStore(browserHistory, window.__INITIAL_STATE__);

// Mise en oeuvre de l'historique base sur le store Redux
const history = syncHistoryWithStore(browserHistory, store);

// Recuperation de la definition des routes
const routes = getRoutes(store);

// Creation de la fonction de resolution des routes
const matchRoutes = location => match({ routes, location }, (error, redLoc, renderProps) => {

  // Definition des parametres disponibles en entree pour redial
  const locals = {
    path: renderProps.location.pathname,
    query: renderProps.location.query,
    params: renderProps.params,
    dispatch: store.dispatch,
    getState: store.getState
  };

  const { components } = renderProps;
  if (window.__INITIAL_STATE__) {
    delete window.__INITIAL_STATE__;
  } else {
    trigger('fetch', components, locals);
  }

  // Fetch deferred, client-only data dependencies:
  trigger('defer', components, locals).then(() => {
    trigger('done', components, locals);
  });
});

history.listen(matchRoutes);

// Binding des composants du store et du router sur le noeud root
const root = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

render(root, document.getElementById('root'));
