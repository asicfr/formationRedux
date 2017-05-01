/**
 * Configuration des outils de developpement
 */

const isProduction = process.env.NODE_ENV === 'production';

export default (process.env.BROWSER && window.devToolsExtension && !isProduction)
  ? window.devToolsExtension()
  : f => f;
