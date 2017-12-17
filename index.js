const path = require('path');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const { sequelize } = require('./models');
const ArticlesController = require('./controllers/ArticlesController');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').load();
}

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// TODO: Come back and look into this.
app.use((req, res, next) => {
	const origin = req.get('origin');

	// TODO Add origin validation
	res.header('Access-Control-Allow-Origin', origin);
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

	// intercept OPTIONS method
	if (req.method === 'OPTIONS') {
		res.sendStatus(204);
	} else {
		next();
	}
});

const CLIENT_PATH = path.join(__dirname + '/client');

app.get('/', function (req, res) {
	res.sendFile(path.join(CLIENT_PATH + '/index.html'));
});

app.get('/api/v1/articles', ArticlesController.getArticles);
app.post('/api/v1/articles', ArticlesController.addArticles);
app.get('/api/v1/article/:id', ArticlesController.getArticle);
app.delete('/api/v1/articles', ArticlesController.deleteArticles);

const port = process.env.PORT || 3000;

sequelize.sync({ force: false })
	.then(() => {
		app.listen(port)
		console.log(`Server started on port ${port}`)
	});