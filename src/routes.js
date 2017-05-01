/* eslint no-unused-vars: "off" */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from 'components/HomePage/HomePage';
import OtherPage from 'components/OtherPage/OtherPage';

/**
 * Fonction decrivant les routes de l'application
 * @export getRoutes
 * @param {object} store le store redux
 * @returns Route la definition des routes
 */
export default function getRoutes(store) {
  return (
    <Route path="/">
      <Route path="other" component={OtherPage} />
      <IndexRoute component={HomePage} />
    </Route>
  );
}
