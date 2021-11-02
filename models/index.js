const User = require('./User');
const Trip = require('./tripModel')
const tripDetails = require('./tripDetails')
const tripComments = require('./tripComments')

// Define sequelize associations in this file.

Trip.hasOne(tripDetails. {
    foreignKey: "trip_id",
    onDelete: "CASCADE",
})

Trip.hasMany(tripComments, {
    foreignKey: "trip_id",
    onDelete: "CASCADE",
  });

User.hasMany(Trip, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});





module.exports = { User, Trip, tripComments, tripDetails };
