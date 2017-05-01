/* eslint prefer-template: "off" */
/* eslint import/no-dynamic-require: "off" */

/**
 * Configuration de base
 * Les entrées sont centralisées dans le fichier application.json
 */
import path from 'path';

let baseConfigTmp = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.APP_HTTP_PORT || 3000,
  assetsFolder: path.join(__dirname, './assets'),
  distFolder: path.join(__dirname, '../dist'),
  logFolder: process.env.LOG_PATH || path.join(__dirname, '../logs')
};

/**
 * Recuperation de la configuration externe
 */
if (process.env.BROWSER) {
	baseConfigTmp = Object.assign({}, baseConfigTmp, window.APP_CONFIG);
} else if (process.env.APP_DIR) {
	baseConfigTmp = Object.assign({}, baseConfigTmp, 
		require(process.env.APP_DIR + '/properties/application.json'));
} else {
	baseConfigTmp = Object.assign({}, baseConfigTmp, 
		require('../application.json'));
}

/**
 * Declaration de la fonction permettant de recuperer le endpoint du back-end
 * @returns endpoint du back-end
 */
baseConfigTmp.backend.getEndpoint = function getEndpoint() {
	return (process.env.BROWSER) ? 
		baseConfigTmp.backend.endpoint.external : 
		baseConfigTmp.backend.endpoint.internal;
};

const baseConfig = Object.freeze(Object.assign({}, baseConfigTmp));
export default baseConfig;
