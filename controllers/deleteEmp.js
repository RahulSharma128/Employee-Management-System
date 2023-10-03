const db = require("../routes/db-config");


const deleteEmp = (req, res, next) => {
    const id = req.query.delete;
    // TRy-5t  (3 was better)
    const sql = `DELETE FROM employe WHERE id = '${id}'`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Failed to delete employee");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Employee not found");
      } else {
        console.log(`Deleted ${result.affectedRows} employee(s)`);
        next(); // Proceed to the next middleware or route handler
      }
    });
  }

  module.exports=deleteEmp;