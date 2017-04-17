CMSC 191 Information Retrieval
==================================

Getting Started
---------------

```sh
# Clone the repository

# Initialize the database
mysql -uroot -puser < src/database/schema.sql
node src/middleware/parser.js

# Install dependencies
sudo npm install -g nodemon
npm install

# Start development live-reload server
npm run dev

# Start production server:
npm start

License
-------

MIT
