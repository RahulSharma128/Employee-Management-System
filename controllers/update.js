const { showEmployee,connectDB } = require("../routes/mongo");

const update = async (req, res) => {
  connectDB();
  const { id, firstName, lastName, email, phoneNumber, address, country, city, skills } = req.body;
//find by id error trying other method part 2
  try {
    const employee = await showEmployee.findOneAndUpdate(
      { _id: id },
      { firstName, lastName, email, phoneNumber, address, country, city, skills },
      { new: true }
    );

    if (!employee) {
      return res.status(404).send("Employee not found.");
    }

    res.status(200).send("Employee updated successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the employee.");
  }
};

module.exports = update;
