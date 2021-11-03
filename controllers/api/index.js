const router = require('express').Router();
const usersRouter = require('./users-router');
const trip_details = require('./trip-details');
const trip = require('./trip-page_6');
router.use('/users', usersRouter);
router.use('/trip', trip)
router.use('/trip_details', trip_details)
module.exports = router;
