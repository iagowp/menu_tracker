'use strict';
module.exports = (sequelize, DataTypes) => {
  var Complement = sequelize.define('Complement', {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    preparation: DataTypes.STRING
  }, {});
  Complement.associate = function(models) {
    // associations can be defined here
    models.Complement.belongsTo(models.ComplementType, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Complement;
};