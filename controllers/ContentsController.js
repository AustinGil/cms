const { Content } = require('../models')

module.exports = {
	async addContents(req, res) {
		try {
			const content = await Content.create(req.body);
			res.send(content);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to create the content'
			});
		}
	},

	async getContents(req, res) {
		try {
			let contents = null;
			const search = req.query.search;
			// if (search) {
			// 	contents = await Song.findAll({
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
			contents = await Content.findAll({
				limit: 10
			});
			// }
			res.send(contents);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to get the contents'
			});
		}
	},

	async getContent(req, res) {
		try {
			const content = await Content.findById(req.params.id);
			res.send(content);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to get the content'
			});
		}
	},

	async editContent(req, res) {
		// try {
		// 	await Content.update(req.body, {
		// 		where: {
		// 			id: req.params.contentId
		// 		}
		// 	});
		// 	res.send(req.body);
		// }
		// catch (err) {
		// 	console.log(err);
		// 	res.status(500).send({
		// 		error: 'An error has occured trying to update the content'
		// 	});
		// }
	},

	async deleteContents(req, res) {
		try {
			const { id } = req.params;
			const content = await Content.findOne({
				where: {
					id,
				}
			});
			content.destroy();
			res.send(id);
		} catch (err) {
			console.log(err)
			res.status(500).send({
				error: 'An error has occured trying to remove the content'
			})
		}
	}
}