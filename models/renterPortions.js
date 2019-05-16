'use strict';
module.exports = (sequelize, DataTypes) => {
  const renterPortions = sequelize.define('renterPortions', {
    billID: DataTypes.INTEGER,
    renterID: DataTypes.INTEGER,
    renterName: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    billName: DataTypes.STRING,
    month: DataTypes.STRING,
    paid: DataTypes.BOOLEAN
  }, {});
  renterPortions.associate = function(models) {
    // associations can be defined here
  };
  return renterPortions;
};