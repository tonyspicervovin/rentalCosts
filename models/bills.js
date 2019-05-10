'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bills = sequelize.define('Bills', {
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    month: DataTypes.STRING
  }, {});
  Bills.associate = function(models) {
    // associations can be defined here
  };
  return Bills;
};