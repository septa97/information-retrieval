import resource from 'resource-router-middleware';
import reviews from '../models/reviews';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'review',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let review = reviews.find( review => review.id===id ),
			err = review ? null : 'Not found';
		callback(err, review);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		db.query('SELECT * FROM reviews;', (err, result) => {
			if (err) {
				throw new Error(err);
			}
			
			res.json(result);
		});
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		db.query('INSERT INTO reviews (title, review) VALUES (?, ?);', [body.title, body.review], (err, result) => {
			if (err) {
				throw new Error(err);
			}

			res.json(result);
		});
	},

	/** GET /:id - Return a given entity */
	read({ review }, res) {
		res.json(review);
	},

	/** PUT /:id - Update a given entity */
	update({ review, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				review[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ review }, res) {
		reviews.splice(reviews.indexOf(review), 1);
		res.sendStatus(204);
	}
});
