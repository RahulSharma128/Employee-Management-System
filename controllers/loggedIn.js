const jwt= require("jsonwebtoken");
const { Employee, connectDB } = require("../routes/mongo");
const bcrypt = require("bcryptjs");

const loggedIn = async (req, res, next) => {
  connectDB();
  if (!req.cookies.UserRegistered) {
    res.redirect("/login");
    return;
  }

  try {
    const decoded = jwt.verify(req.cookies.UserRegistered, process.env.JWT_SECRET);
    const user = await Employee.findById(decoded.id);
    if (!user) {
      res.redirect("/login");
      return;
    }
    req.user = user;
    next();
  } catch (err) {
    res.redirect("/login");
  }
};

module.exports = loggedIn;
