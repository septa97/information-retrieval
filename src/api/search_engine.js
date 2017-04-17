const mysql = require('mysql');
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'user',
	database: 'information-retrieval'
});

exports.search1 = (req, res, next) => {
	db.query('SELECT rating, tail, title, review FROM reviews where match(review) against (?)', [req.query.search_query], (err, result) => {
		if (err) {
			throw new Error(err);
		}

		res.json(result);
	});
};