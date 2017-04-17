import mysql from 'mysql';

export default callback => {
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'user',
		database: 'information-retrieval'
	});

	// connect to a database if needed, then pass it to `callback`:
	callback(connection);
}
