import { version } from '../../package.json';
import { Router } from 'express';
import reviews from './reviews';

export default ({ config, db }) => {
	let api = Router();

	api.use('/reviews', reviews({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
