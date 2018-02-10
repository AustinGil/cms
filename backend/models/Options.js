module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define("Option", {
    name: DataTypes.STRING
  });
  return Option;
};
