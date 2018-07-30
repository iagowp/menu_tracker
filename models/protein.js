'use strict';
module.exports = (sequelize, DataTypes) => {
  var Protein = sequelize.define('Protein', {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    preparation: DataTypes.STRING
  }, {});
  Protein.associate = function(models) {
    // associations can be defined here
    models.Protein.belongsTo(models.ProteinType, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Protein;
};