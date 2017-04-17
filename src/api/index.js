import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import reviews from './reviews';
import search_engine from './../controllers/search_engine'

export default ({ config, db }) => {
	let api = Router();

	api.use('/facets', facets({ config, db }));
	api.use('/reviews', reviews({ config, db }));
	api.get('/search', search_engine.search1);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
