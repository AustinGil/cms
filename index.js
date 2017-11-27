const path = require('path');
const express = require('express')
const app = express()
var bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').load();
}

// MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
	// host: process.env.DB_HOST,
	// user: process.env.DB_USER,
	// password: process.env.DB_PASS,
	// database: process.env.DB_NAME,

	// This works with Docker variables
	host: process.env['MYSQL_PORT_3306_TCP_ADDR'],
	user: process.env['MYSQL_ENV_MYSQL_USER'],
	password: process.env['MYSQL_ENV_MYSQL_PASSWORD'],
	database: process.env['MYSQL_ENV_MYSQL_DATABASE']
});
connection.connect(function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Connected to DB');
	}
});

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const CLIENT_PATH = __dirname + '/client';

app.get('/', function (req, res) {
	res.sendFile(path.join(CLIENT_PATH + '/dist/index.html'));
});

app.get('/api/v1/articles', function (req, res) {
	connection.query(`select * from articles`, function (err, result) {
		if (err) {
			throw (err);
			return;
		}
		res.json(result);
	})
})

app.post('/api/v1/articles', function (req, res) {
	var newArticle = {
		"author": req.body.author,
		"title": req.body.title,
		"body": req.body.body
	}
	connection.query('INSERT INTO articles SET ?', newArticle, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(result);
		res.send(result);
	})
})

app.get('/api/v1/article/:id', function (req, res) {
	connection.query(`SELECT * FROM articles WHERE id = ${req.params.id}`, function (err, result) {
		if (err) {
			throw (err);
			return;
		}
		res.json(result);
	})
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})

// // Mongo
// const MongoClient = require('mongodb').MongoClient

// DB connection URL
// const url = `mongodb://${process.env.DB_PORT_27017_TCP_ADDR}:${process.env.DB_PORT_27017_TCP_PORT}/app`;

// MongoClient.connect(url, function (err, db) {
// 	console.log("Connected successfully to server")
// })