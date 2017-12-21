const { Article } = require('../models')

module.exports = {
	async addArticles(req, res) {
		try {
			const article = await Article.create(req.body);
			res.send(article);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to create the article'
			});
		}
	},

	async getArticles(req, res) {
		try {
			let articles = null;
			const search = req.query.search;
			// if (search) {
			// 	articles = await Song.findAll({
			// 		where: {
			// 			$or: [
			// 				'title', 'artist', 'album', 'genre'
			// 			].map(key => ({
			// 				[key]: {
			// 					$like: `%${search}%`,

			// 				}
			// 			}))
			// 		}
			// 	})
			// } else {
			articles = await Article.findAll({
				limit: 10
			});
			// }
			res.send(articles);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to get the articles'
			});
		}
	},

	async getArticle(req, res) {
		try {
			const article = await Article.findById(req.params.id);
			res.send(article);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to get the article'
			});
		}
	},

	async editArticle(req, res) {
		// try {
		// 	await Article.update(req.body, {
		// 		where: {
		// 			id: req.params.articleId
		// 		}
		// 	});
		// 	res.send(req.body);
		// }
		// catch (err) {
		// 	console.log(err);
		// 	res.status(500).send({
		// 		error: 'An error has occured trying to update the article'
		// 	});
		// }
	},

	async deleteArticles(req, res) {
		try {
			const { id } = req.params;
			const article = await Article.findOne({
				where: {
					id,
				}
			});
			article.destroy();
			res.send(id);
		} catch (err) {
			console.log(err)
			res.status(500).send({
				error: 'An error has occured trying to remove the article'
			})
		}
	}
}