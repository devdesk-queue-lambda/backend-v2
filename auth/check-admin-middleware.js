module.exports = (req, res, next) => {
  if (
    req.decodedJwt.authType &&
    (req.decodedJwt.authType == "admin")
  ) {
    next();
  } else {
    res.status(403).json({ message: "You're not authorized" });
  }
};
