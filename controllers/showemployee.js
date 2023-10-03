const { showEmployee,connectDB } = require("../routes/mongo");

const showemployee = async (searchTerm1, searchTerm2) => {
  connectDB();
  try {
    const result = await showEmployee.find({
      firstName: { $regex: searchTerm1, $options: 'i' },
      phoneNumber: { $regex: searchTerm2, $options: 'i' }
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports=showemployee;


