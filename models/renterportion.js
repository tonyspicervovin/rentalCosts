'use strict';
module.exports = (sequelize, DataTypes) => {
  const renterPortion = sequelize.define('renterPortion', {
    id: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    paid: DataTypes.FLOAT
  }, {});
  renterPortion.associate = function(models) {
    // associations can be defined here
  };
  return renterPortion;
};