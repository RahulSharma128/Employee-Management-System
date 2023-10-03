const db = require("../routes/db-config");
const jwt= require("jsonwebtoken");
const loggedIn = (req,res,next)=>{
  if (!req.cookies.UserRegistered) { //return next();
   res.redirect("/login");
    return;
  }
  try {
    const decoded = jwt.verify(req.cookies.UserRegistered,process.env.JWT_SECRET);
    db.query('SELECT * FROM users WHERE id = ?',[decoded.id] ,(err,result)=>{
      if(err || result.length === 0) {
        res.redirect("/login");
        return;
      }
      req.user=result[0];
      next();
    })
  } catch(err){
    res.redirect("/login");
  }
}
module.exports=loggedIn;
