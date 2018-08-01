'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sauce = sequelize.define('Sauce', {
    name: DataTypes.STRING
  }, {});
  Sauce.associate = function(models) {
    // associations can be defined here
    models.Sauce.belongsToMany(models.ProteinType, {through: 'ProteinTypeSauce'});
  };
  return Sauce;
};