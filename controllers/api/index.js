const router = require('express').Router();
const usersRouter = require('./users-router');
const trip_details = require('./trip-details');
const trip = require('./trip-page_6');
const tripComments = require('./trip-comments');
router.use('/users', usersRouter);
router.use('/trip', trip);
router.use('/trip_details', trip_details);
router.use('/comments', tripComments);
module.exports = router;
