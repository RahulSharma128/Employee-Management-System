const { showEmployee,connectDB } = require("../routes/mongo");

const editEmp = async (req, res, next) => {
  connectDB();
  const id = req.query.edit;
  try {
    const employee = await showEmployee.findById(id);
    //console.log(employee);
    if (!employee) {
      return res.status(404).send('Employee not found');
    }
    req.employee = employee;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
};

module.exports = editEmp;
