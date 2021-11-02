const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class tripComments extends Model {};

tripComments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "tripComments",
    }
)

module.exports = tripComments;