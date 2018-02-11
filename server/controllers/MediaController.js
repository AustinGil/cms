const fs = require('fs');
const path = require('path');

const { Media } = require('../models');

module.exports = {
	async addMedia(req, res) {
		try {
			const file = req.files[0];

			const media = await Media.create({
				name: req.body.name || file.originalname,
				url: file.path,
				description: req.body.description || '',
				mimetype: file.mimetype
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
		try {
			let media = null;
			// const search = req.query.search;
			const ids = req.query.ids;

			const query = {
				limit: 24
			};
			const where = {};

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

			if (ids) {
				where.id = {
					$or: ids.split(',')
				}
			}

			if (where) {
				query.where = where;
			}

			media = await Media.findAll(query);
			res.send(media);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to get the media'
			});
		}
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

		try {
			let file = null;
			const id = req.query.id;

			file = await Media.findOne({
				where: {
					id
				}
			});

			if (!file) {
				return res.status(404).send({
					error: 'That file does not exist.'
				});
			}

			const pathToFile = path.join(__dirname, `../${file.url}`);

			// Delete the file from the system, then delete entry from database
			await fs.unlink(pathToFile, () => {
				file.destroy();
			});
			res.send(file);
		}
		catch (err) {
			console.log(err);
			res.status(500).send({
				error: 'An error has occured trying to delete the media'
			});
		}
	}
}