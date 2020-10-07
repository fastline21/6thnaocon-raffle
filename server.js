const express = require('express');

// Init app
const app = express();

// ENV
require('dotenv').config();

// Database
const db = require('./config/db');
db();

// Init middleware
app.use(express.json({ extended: true }));

// Routes
app.use('/api', require('./routes/index'));

// Production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port:${port}`));
