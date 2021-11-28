const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Velo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Velo.init({
    nameRoute: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    lengthRoute: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    crowdedPoint: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    startPoint: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    finishPoint: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    authorRoute: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Velo',
  });
  return Velo;
};
