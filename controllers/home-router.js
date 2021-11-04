const router = require('express').Router();
const { User, Trip, TripDetails, TripComments } = require('../models');
const withAuth = require('../util/withAuth')
// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get('/', withAuth ,  async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ['password'],
        raw: true,
      });
      const tripsData = await Trip.findAll().catch((err) => { 
        res.json(err);
      });
      const trips = tripsData.map((trip) => trip.get({ plain: true }));
      res.render('home', {
        title: 'Home Page',
        isLoggedIn: req.session.isLoggedIn,
        user, trips
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign-Up Page' });
});

router.get('/addtrip', withAuth, (req, res) => {
  res.render('addtrip', { 
    title: 'Add Trip Page',
    isLoggedIn: req.session.isLoggedIn
  });
});

// THIS ONE WILL NEED TO BE CHANGED TO /TRIP/:ID BUT RIGHT NOW THIS IS FOR THE PLACEHOLDER
router.get('/trip/:id', withAuth, async (req, res) => {
  try {
    if (req.session.isLoggedIn) {
      const tripData = await Trip.findByPk(req.params.id, {
        include: [
          { 
            model: TripDetails,
            attributes: [
              'id',
              'rating',
              'food',
              'experience',
              'lesson',
              'revisit'
            ]
          },
          {
            model: TripComments,
            attributes: [
              'id',
              'comments',
              'trip_id'
            ]
          }
        ]
      });
      const trip = tripData.get({ plain: true });
      
      const commentData = await TripComments.findAll().catch((err) => { 
        res.json(err);
      });
      const comment = commentData.map((comment) => comment.get({ plain: true }));

      console.log(trip);
      console.log(comment);
      
      res.render('trip', { 
        title: 'Trip Page', isLoggedIn: req.session.isLoggedIn, trip, comment 
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

module.exports = router;
