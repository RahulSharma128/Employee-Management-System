const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const employeeSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection: 'users' });

const Employee = mongoose.model('Employee', employeeSchema);

const showEmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  address: { type: String , required: true },
  country: { type: String , required: true },
  city: { type: String , required: true },
  skills: { type: [String] , required: true }
}, { collection: 'employees' });

const showEmployee = mongoose.model('showEmployee', showEmployeeSchema);

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/employee', { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDB, Employee, showEmployee };
