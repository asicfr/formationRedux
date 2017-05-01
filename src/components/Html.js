import React from 'react';
import serialize from 'serialize-javascript';

/**
 * Composant de construction de la structure de la page
 * @param {string} title titre de la page
 * @param {stringany} description description de la page
 * @param {object} content contenu de la page
 * @param {string} robots directive d'indexation
 * @param {object} state etat courant de l'application
 * @param {object} stats ressources (javascript et css) générées par webpack
 */
const Html = ({ title, description, content, robots, state, stats: { style, main = 'bundle.js' } }) => (
<html lang="fr-FR" dir="ltr">
	<head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={robots} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />

        {style && <link href={`/dist/${style}`} rel="stylesheet" />}
        <script async dangerouslySetInnerHTML={{ __html: ' dataLayer = []' }} />
        <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${serialize(state)}` }} />
	</head>
	<body className="home">
        <div>{process.env.APP_DIR && <script dangerouslySetInnerHTML={{ __html: `window.APP_CONFIG = ${JSON.stringify(require(process.env.APP_DIR + '/properties/application.json'))}` }} />}
            {process.env.APP_DIR == null && <script dangerouslySetInnerHTML={{ __html: `window.APP_CONFIG = ${JSON.stringify(require('../../application.json'))}` }} />}
            <div id="root" className="home" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <script src={`/dist/${main}`} />
	</body>
</html>

);

export default Html;
