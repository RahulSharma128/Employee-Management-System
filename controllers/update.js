const db = require("../routes/db-config");

const update = (req, res) => {
  const { id,firstName, lastName, email, phoneNumber, address, country, city } = req.body;
  const query = `UPDATE employe SET firstName = ?, lastName = ?, email = ?, phoneNumber = ?, address = ?, country = ?, city = ? WHERE id = ?`;
  db.query(
    query,
    [firstName, lastName, email, phoneNumber, address, country, city, id],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("An error occurred while updating the employee.");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Employee not found.");
      } else {
        res.status(200).send("Employee updated successfully!");
      }
    }
  );
};

module.exports = update;
// connection.end();