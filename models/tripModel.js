const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");




class Trip extends Model {}



Trip.init(
  {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  startDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  endDate: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
  }
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Trip",
  }
);

module.exports = Trip