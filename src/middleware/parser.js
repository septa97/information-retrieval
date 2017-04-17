const fs = require('fs')

function parseCSV() {
	let reviewsPath = __dirname + '/../amazon_book_reviews';
	let reviewRegex = /"<span class=""a-size-base review-text"">(.*)<\/span>"/g;
	let reviews = [];

	fs.readdirSync(reviewsPath).forEach(filename => {

		if (filename.match(/\.csv/)) {
			fs.readFile(reviewsPath + `/${filename}`, 'utf-8', (err, data) => {
				let lines = data.split('\n')

				lines.forEach(line => {
					if (line.match(reviewRegex)) {
						let review = reviewRegex.exec(line)[1];
						reviews.push(review.replace(/<br\/>/g, ' '));
					}
				});
			});
		}
	});
}

parseCSV();