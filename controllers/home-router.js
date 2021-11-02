const router = require('express').Router();
const { User } = require('../models');
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
    }
    res.render('home', {
      title: 'Home Page',
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
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

router.get('/addtrip', (req, res) => {
  res.render('addtrip', { title: 'Add Trip Page' });
});

router.get('/trip/:id', (req, res) => {
  res.render('trip', { title: 'Trip Page' });
});

// CURRENTLY LOGOUT DOES NOT WORK - when the user clicks the logout button,
// they should be redirected to the home page but with their session ended
// therefore they should see the sign in or sign up option

module.exports = router;
