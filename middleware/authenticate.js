const isAuthenticated = (req, res, next) => {
  if (req.session.user === undefined) {
    return res.status(401).json('Not authenticated');
  }
  next();
};

module.exports = {
  isAuthenticated
};
