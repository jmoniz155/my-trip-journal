const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");




class tripModel extends Model {}



tripModel.init(
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
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);

module.exports = tripModel