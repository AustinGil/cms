const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
	storage: multer.memoryStorage(),
	fileFilter(req, file, next) {
		console.log('---multer')
		const isPhoto = file.mimetype.startsWith('image/');
		if (isPhoto) {
			console.log('---image: yep')
			next(null, true);
		} else {
			console.log('---image: nope')
			next({ message: 'That file type is not allowed.' }, false);
		}
	}
};
exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
	// Check if there is a file
	if (!req.file) {
		console.log('---resize: nope')
		next();
		return;
	}
	console.log('---resize')
	console.log(req.file);
};