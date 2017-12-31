module.exports = (sequelize, DataTypes) => {
	const Media = sequelize.define('Media', {
		name: DataTypes.STRING,
		url: DataTypes.STRING,
		description: DataTypes.TEXT,
	})

	Media.associate = function (models) { }

	return Media
}