'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProteinType = sequelize.define('ProteinType', {
    name: DataTypes.STRING
  }, {});
  ProteinType.associate = function(models) {
    // associations can be defined here
  };
  return ProteinType;
};