/* eslint import/no-dynamic-require: "off" */
/* eslint prefer-template: "off" */
import path from 'path';
import { match, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from 'store';
import config from 'configuration';
import getRoutes from 'routes';
import createHtml from './innerrender';

/**
 * Recuperation des hash-ressources js et css
 * definis dans le fichier stats.json pour l'environnement de prod (voir rep dist)
 */
const stats = (config.env === 'production')
  ? require(path.join(config.distFolder, 'stats.json'))
  : {};

/**
 * Fonction de render
 * @param {object} req requete
 * @param {object} res reponse
 */
export default (req, res) => {

  // Definition du state initial
  const initialState = {
    contextGlobal: {
      hostServer: req.protocol + '://' + req.get('host')
    },
  };
  
  const { url } = req;
  const memHistory = createMemoryHistory(url);
  const location = memHistory.createLocation(url);
  const store = createStore(memHistory, initialState);
  const history = syncHistoryWithStore(memHistory, store);
  const routes = getRoutes(store);
  
  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if (err) { return res.status(500).end('internal server error'); }
    if (redirectLocation) { return res.redirect(redirectLocation.pathname); }
    if (!renderProps) { return res.status(404).end('not found'); }

    // Definition des parametres disponibles en entree pour redial
    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch: store.dispatch,
      getState: store.getState
    };

    // Valeur en dure pour le titre, la decription et le SEO
    const title = 'A changer';
    const robots = 'noindex, nofollow';
    const description = 'description';

    // Traitement du rendu
    return createHtml(res, renderProps.components, locals, store, history, routes,
      title, description, robots, stats);

  });

};
