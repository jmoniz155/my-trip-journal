const User = require('./User');
const Trip = require('./tripModel')
const TripDetails = require('./tripDetails')
const TripComments = require('./tripComments')

// Define sequelize associations in this file.

Trip.hasOne(TripDetails, {
    foreignKey: "trip_id",
    onDelete: "CASCADE",
})

Trip.hasMany(TripComments, {
    foreignKey: "trip_id",
    onDelete: "CASCADE",
  });

User.hasMany(Trip, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Trip.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

TripDetails.belongsTo(Trip, {
    foreignKey: "trip_id",
    onDelete: "CASCADE",
});

TripComments.belongsTo(Trip, {
    foreignKey: "trip_id",
    onDelete: "CASCADE",
});


module.exports = { User, Trip, TripComments, TripDetails };
