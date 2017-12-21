const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { sequelize } = require('./models');
const ArticlesController = require('./controllers/ArticlesController');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').load();
}

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

const CLIENT_PATH = path.join(__dirname + '/client');

app.get('/', (req, res) => {
	res.sendFile(path.join(CLIENT_PATH + '/index.html'));
});

app.get('/api/v1/articles', ArticlesController.getArticles);
app.post('/api/v1/articles', ArticlesController.addArticles);
app.get('/api/v1/article/:id', ArticlesController.getArticle);
app.delete('/api/v1/articles/:id', ArticlesController.deleteArticles);

const port = process.env.PORT || 3000;

sequelize.sync({ force: false })
	.then(() => {
		app.listen(port)
		console.log(`Server started on port ${port}`)
	});