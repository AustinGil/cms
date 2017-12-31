const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Models
const { sequelize } = require('./models');

// Middleware
const uploadsMiddleware = require('./middleware/uploads');

// Controllers
const ContentsController = require('./controllers/ContentsController');
const MediaController = require('./controllers/MediaController');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').load();
}

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

const CLIENT_PATH = path.join(__dirname + '/client');

app.get('/', (req, res) => {
	res.sendFile(path.join(CLIENT_PATH + '/index.html'));
});

// Contents
app.get('/api/v1/contents', ContentsController.getContents);
app.post('/api/v1/contents',
	// uploadsMiddleware.upload,
	// uploadsMiddleware.resize,
	ContentsController.addContents
);
app.delete('/api/v1/contents/:id', ContentsController.deleteContents);

// Media
// app.get('/api/v1/media', ContentsController.getContents);
app.post('/api/v1/media',
	// uploadsMiddleware.upload,
	// uploadsMiddleware.resize,
	MediaController.addMedia
);
// app.delete('/api/v1/media/:id', ContentsController.deleteContents);

const port = process.env.PORT || 3000;

sequelize.sync({ force: false })
	.then(() => {
		app.listen(port);
		console.log(`Server started on port ${port}`);
	});