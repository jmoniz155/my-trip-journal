const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TripComments extends Model {};

TripComments.init(
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
        },
        trip_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Trip',
              key: 'id',
            }
        }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "TripComments",
    }
)

module.exports = TripComments;