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

const CLIENT_PATH = path.join(__dirname + '/client');

app.get('/', function (req, res) {
	res.sendFile(path.join(CLIENT_PATH + '/index.html'));
});

app.post('/api/v1/articles', ArticlesController.addArticles);
app.get('/api/v1/articles', ArticlesController.getArticles);
app.get('/api/v1/article/:id', ArticlesController.getArticle);

const port = process.env.PORT || 3000;

sequelize.sync({ force: false })
	.then(() => {
		app.listen(port)
		console.log(`Server started on port ${port}`)
	})