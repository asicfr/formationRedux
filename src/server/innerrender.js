import React from 'react';
import { trigger } from 'redial';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Html from 'components/Html';

/**
 * Creation de la structure de la page
 * 
 * @param {object} req requete
 * @param {object} components components
 * @param {object} locals contexte pour les hook redial
 * @param {object} store store redux
 * @param {object} history historique router
 * @param {object} routes routes
 * @param {string} title titre de la page
 * @param {string} description description pour le SEO
 * @param {string} robots directive pour le SEO
 * @param {object} stats ressources (javascript et css) générées par webpack
 */
export default function createHtml(res, components, locals, store, history, routes,
  title, description, robots, stats) {

  // Declenchement des hook fetch de redial 
  trigger('fetch', components, locals).then(() => {
    try {
      const state = store.getState();

      const root = (
        <Provider store={store}>
          <Router history={history} routes={routes} />
        </Provider>
      );

      const HtmlComponent = (
        <Html 
          title={title}
          description={description}
          robots={robots}
          content={renderToString(root)}
          stats={stats}
          state={state} 
        />
      );

      const markup = renderToStaticMarkup(HtmlComponent);
      const page = `<!doctype html>${markup}`;
      res.set('Content-Type', 'text/html');
      res.end(page);
    } catch (e) {
      /* eslint-disable no-console */
      console.log('Erreur lors du rendu serveur de la page', e);
      /* eslint-enable no-console */
      throw e;
    }
  }).catch((catchErr) => {
    if (catchErr) {
      /* eslint-disable no-console */
      console.error('Error : ', JSON.stringify(catchErr));
      /* eslint-enable no-console */
    }
    res.redirect('/error');
  });

}
