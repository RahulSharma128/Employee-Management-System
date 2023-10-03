const { Employee,connectDB } = require("../routes/mongo");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  connectDB();//start the conncetion
  const { email, password: Npassword } = req.body;
  if (!email || !Npassword)
    return res.json({
      status: "error", error: "Please enter your email and password"});
  else {
    try {
      const existingUser = await Employee.findOne({ email: email });
      if (existingUser)
        return res.json({
          status: "error",
          error: "Email has already been registered",
        });
      else {
        const password = await bcrypt.hash(Npassword, 8);
        const newUser = new Employee({ email: email, password: password });
        await newUser.save();
        return res.json({
          status: "success",
          success: "User has been registered",
        });
      }
    } catch (err) {
      console.log(err);
      return res.json({
        status: "error",
        error: "Something went wrong",
      });
    }
  }
};

module.exports = register;
