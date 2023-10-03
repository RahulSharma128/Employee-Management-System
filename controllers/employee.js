const { showEmployee,connectDB } = require("../routes/mongo");

const employee = async (req, res) => {
  connectDB();
const { firstName, lastName, email, phoneNumber, address, country, city, skills } = req.body;

try {
const existingEmployee = await showEmployee.findOne({ email });
if (existingEmployee) {
return res.status(400).json({ success: false, error: "An employee with this email already exists." });
}

//showEmployee dhyan rakna
const newEmployee = new showEmployee({
  firstName,  lastName,  email,  phoneNumber,  address,  country,  city,  skills
});

await newEmployee.save();
res.status(201).json({ success: true, message: "Employee added successfully." });

} catch (err) {
  console.error(err);
  return res.status(500).json({ success: false, error: "Internal server error" });
  }
  };
  
  module.exports = employee;
