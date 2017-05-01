import express from 'express';
import FileStreamRotator from 'file-stream-rotator';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import compression from 'compression';
import config from 'configuration';
import render from './render';

/**
 * Configuration et lancement du serveur express
 */
const server = express();

/* eslint-disable no-console */
console.log(config.logFolder);
/* eslint-enable no-console */

if (config.env === 'development') {
	require('./webpack').default(server);
}

if (config.env === 'production') {
	server.use(compression());
	server.use('/dist', express.static(config.distFolder));
}
server.use('/assets', express.static(config.assetsFolder));

// Ensure log directory exists
fs.existsSync(config.logFolder) || fs.mkdirSync(config.logFolder);

// create a rotating write stream
let accessLogStream = FileStreamRotator.getStream({
	date_format: 'YYYYMMDD',
	filename: path.join(config.logFolder, 'access-%DATE%.log'),
	frequency: 'daily',
	verbose: false
});

// Configuration du logger
server.use(morgan('combined', { stream: accessLogStream }));

// Configuration du process de rendu
server.use(render);

// Lancement de l'ecoute
server.listen(config.port, '0.0.0.0', (err) => {
	/* eslint-disable no-console */
	if (err) { return console.log(err); }
	console.log(`\n[APP] listening at localhost:${config.port} in ${config.env} mode`);
	/* eslint-enable no-console */
});
