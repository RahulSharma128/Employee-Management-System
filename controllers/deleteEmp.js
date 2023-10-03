const { showEmployee,connectDB } = require("../routes/mongo");

const deleteEmp = async (req, res, next) => {
  connectDB();
  const id = req.query.delete;

  try {
    const deletedEmp = await showEmployee.findOneAndDelete({ _id: id });

    if (!deletedEmp) {
      res.status(404).send('Employee not found');
    } else {
      console.log(`Deleted employee with ID ${id}`);
      next();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to delete employee');
  }
};

module.exports = deleteEmp;
