const { Media } = require('../models');

module.exports = {
	async addMedia(req, res) {
		try {
			const { name, description } = req.fields;
			const media = await Media.create({
				name,
				description
			});
			res.send(media);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to create the media'
			});
		}
	},

	async getMedia(req, res) {
		console.log('TODO: add media...')
		// try {
		// 	let media = null;
		// 	const search = req.query.search;
		// 	const ids = req.query.ids;

		// 	const query = {
		// 		limit: 10
		// 	};
		// 	const where = {};

		// 	// if (search) {
		// 	// 	media = await Song.findAll({
		// 	// 		where: {
		// 	// 			$or: [
		// 	// 				'title', 'artist', 'album', 'genre'
		// 	// 			].map(key => ({
		// 	// 				[key]: {
		// 	// 					$like: `%${search}%`,

		// 	// 				}
		// 	// 			}))
		// 	// 		}
		// 	// 	})

		// 	if (ids) {
		// 		where.id = {
		// 			$or: [ids]
		// 		}
		// 	}

		// 	if (where) {
		// 		query.where = where;
		// 	}

		// 	media = await Media.findAll(query);
		// 	res.send(media);
		// }
		// catch (err) {
		// 	console.log(err);
		// 	res.status(500).send({
		// 		error: 'An error has occured trying to get the media'
		// 	});
		// }
	},

	async editMedia(req, res) {
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

	async deleteMedia(req, res) {
		console.log('TODO: add media...')
		// try {
		// 	const { id } = req.params;
		// 	const media = await Media.findOne({
		// 		where: {
		// 			id,
		// 		}
		// 	});
		// 	media.destroy();
		// 	res.send(id);
		// } catch (err) {
		// 	console.log(err)
		// 	res.status(500).send({
		// 		error: 'An error has occured trying to remove the media'
		// 	})
		// }
	}
}