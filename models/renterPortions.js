'use strict';
module.exports = (sequelize, DataTypes) => {
  const renterPortions = sequelize.define('renterPortions', {
    billID: DataTypes.INTEGER,
    renterID: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    paid: DataTypes.FLOAT,
    billName: DataTypes.STRING
  }, {});
  renterPortions.associate = function(models) {
    // associations can be defined here
  };
  return renterPortions;
};