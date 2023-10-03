const db =require("../routes/db-config");

const showemployee = (searchTerm1, searchTerm2) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM employe WHERE firstName LIKE '%${searchTerm1}%' AND phoneNumber LIKE '%${searchTerm2}%'`;
    db.query(query, (err, res) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};



module.exports=showemployee;


