// Use this middleware for protected routes. Redirects to /login if the user is not
// logged in.
const withAuth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.render('home');
  }
  next();
};

module.exports = withAuth;
