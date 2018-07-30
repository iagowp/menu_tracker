'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComplementType = sequelize.define('ComplementType', {
    name: DataTypes.STRING
  }, {});
  ComplementType.associate = function(models) {
    // associations can be defined here
  };
  return ComplementType;
};