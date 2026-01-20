const authMiddleware = (req, res, next) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return res.status(401).json({ message: "Not accessed" });
  }

  next();
};

module.exports = authMiddleware;
