'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dish = sequelize.define('Dish', {
    sold: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {});
  Dish.associate = function(models) {
    // associations can be defined here
    models.Dish.hasOne(models.Protein, {
      foreignKey: {
        allowNull: false
      }
    });
    models.Dish.hasOne(models.Sauce);
    models.Dish.hasMany(models.Complement, { as: 'Complement1' });
    models.Dish.hasMany(models.Complement, { as: 'Complement2' });
  };
  return Dish;
};