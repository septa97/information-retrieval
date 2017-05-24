const mysql = require('mysql');
const autocorrect = require('autocorrect')();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'user',
	database: 'information-retrieval'
});

exports.search = (req, res, next) => {
	let qsArray = req.query.search_query.split(/\s+/);
	let qs = qsArray.map(e => autocorrect(e)).join(' ');

	db.query('SELECT rating, tail, title, review, ((1.5 * (MATCH(title) AGAINST (? IN BOOLEAN MODE))) + (0.5 * (MATCH(review) AGAINST (? IN BOOLEAN MODE)))) AS relevance FROM reviews WHERE (MATCH(title, review) AGAINST (? IN BOOLEAN MODE)) ORDER BY relevance DESC;', [qs, qs, qs], (err, result) => {
		if (err) {
			throw new Error(err);
		}

		res.json(result.slice(0, 1000));
	});
};
