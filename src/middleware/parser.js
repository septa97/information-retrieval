const fs = require('fs');
const mysql = require('mysql');
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'user',
	database: 'information-retrieval'
})

function main() {
	let reviewsPath = __dirname + '/../amazon_book_reviews';
	let reviewRegex = /"<span class=""a-size-base review-text"">(.*)<\/span>"/g;

	fs.readdirSync(reviewsPath).forEach(filename => {
		if (filename.match(/\.csv/)) {
			let data = fs.readFileSync(reviewsPath + `/${filename}`, 'utf-8');
			let lines = data.split('\n');

			lines.forEach(line => {
				if (line.match(reviewRegex)) {
					let s = line.split(/\s+/);
					let title = '';
					let curr = 2;

					while (curr < s.length && s[curr] !== '"<span') {
						title += s[curr] + ' ';
						curr++;
					}

					let review = reviewRegex.exec(line)[1];
					review = review.replace(/<br\/>/g, ' ');

					db.query('INSERT INTO reviews (title, review) VALUES (?, ?);', [title, review], (err, result, fields) => {
						if (err) {
							throw new Error(err);
						}
					})
				}
			});
		}
	});
}

main();