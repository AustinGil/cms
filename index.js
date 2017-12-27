const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { sequelize } = require('./models');
const ContentsController = require('./controllers/ContentsController');

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

app.get('/api/v1/contents', ContentsController.getContents);
app.post('/api/v1/contents', ContentsController.addContents);
app.get('/api/v1/content/:id', ContentsController.getContent);
app.delete('/api/v1/contents/:id', ContentsController.deleteContents);

const port = process.env.PORT || 3000;

sequelize.sync({ force: true })
	.then(() => {
		app.listen(port)
		console.log(`Server started on port ${port}`)
	});