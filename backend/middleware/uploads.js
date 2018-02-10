const path = require('path');
const multer = require('multer');
// const jimp = require('jimp');
// const uuid = require('uuid');

const multerOptions = {
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, 'uploads/');
		},
		filename: (req, file, cb) => {
			cb(null, Date.now() + path.extname(file.originalname));
		}
	})
	// storage: multer.memoryStorage(),
	// dest: '/uploads/',
	// fileFilter(req, file, next) {
	// 	const isPhoto = file.mimetype.startsWith('image/');
	// 	if (isPhoto) {
	// 		next(null, true);
	// 	} else {
	// 		next({ message: 'That file type is not allowed.' }, false);
	// 	}
	// }
};
exports.upload = multer(multerOptions).any('file');

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