'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category.init({
    name: DataTypes.STRING,
    image: DataTypes.BLOB,
    category_id: DataTypes.BIGINT,
    parent_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};