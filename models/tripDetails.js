const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class tripDetails extends Model {};

tripDetails.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        rating: {
            type: DataTypes.DECIMAL(10, 2), 
            allowNull: false,
            validate: {
                isDecimal: true
            },
          },
        food: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        experience: {
            type: DataTypes.STRING,
            allowNull: false,       
        },
        lesson: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        revisit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trip_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'trip',
              key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "tripDetails",
      }
)

module.exports = tripDetails