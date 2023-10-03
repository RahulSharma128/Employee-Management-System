
const db = require("../routes/db-config");

const editEmp = (req, res, next) => {
  const id = req.query.edit;
  const query = `SELECT * FROM employe WHERE id = '${id}'`;
  db.query(query, (error, results, fields) => {
    if (error) {
      return next(error);
    }

    // pass the user data to the next middleware
    req.user = results[0];
    next();
  });
};

module.exports = editEmp;
