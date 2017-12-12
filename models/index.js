const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const db = {}

const sequelize = new Sequelize(
  process.env['MYSQL_ENV_MYSQL_DATABASE'],
  process.env['MYSQL_ENV_MYSQL_USER'],
  process.env['MYSQL_ENV_MYSQL_PASSWORD'],
  {
    dialect: process.env.DIALECT || 'mysql',
    host: process.env['MYSQL_PORT_3306_TCP_ADDR'],
  }
);

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Checks if any model has an association method (such as bookmarks) and fires it.
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db