'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init({
    addressid: DataTypes.STRING,
    addressline1: DataTypes.STRING,
    addressline2: DataTypes.STRING,
    area: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};