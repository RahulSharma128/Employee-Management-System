const db = require("../routes/db-config");

const employee = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, country, city, skills } = req.body;
  console.log(req.body);
  console.log('employees');
  const skillsString = JSON.stringify(skills); // convert skills array to string

  const sql = 'SELECT COUNT(*) AS count FROM employe WHERE email = ?';

  db.query(sql, [email], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const count = results[0].count;

    const emailExists = count === 1;

    // check if employee with same email already exists
    if (emailExists) {
      // employee with same email already exists, return error response
      return res.status(400).json({ success: false, error: "An employee with this email already exists." });
    } else {
      // employee does not exist, create new employee record
      db.query("INSERT INTO employe SET ?", { firstName, lastName, email, phoneNumber, address, country, city, skills: skillsString }, (error, result) => {
        if (error) {
          return res.status(510).json({ success: false, error: "Internal server error" });
        }
        
        res.status(201).json({ success: true, message: "Employee added successfully." });
      });
    }
  });
};

module.exports = employee;
