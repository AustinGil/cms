module.exports = (sequelize, DataTypes) => {
	const Content = sequelize.define('Content', {
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		body: DataTypes.TEXT,
	})

	Content.associate = function (models) { }

	return Content
}