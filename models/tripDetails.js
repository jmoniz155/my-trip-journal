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
            type: DataTypes.Sequelize.DECIMAL(10, 2), 
            allowNull: false,
            validate: {
                isDecimal: true
            },
            references: {
                model: 'trip',
                key: 'id',
              },
          },
        food: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'trip',
                key: 'id',
              },
          },
        experience: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'trip',
                key: 'id',
              },          
        },
        lesson: {
            rtpe: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'trip',
                key: 'id',
              },
        },
        revisit: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            references: {
                model: 'trip',
                key: 'id',
              },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "User",
      }
)