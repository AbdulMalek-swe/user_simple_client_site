 
const { findUserByEmail , signupService} = require("../service/user.service");
const { generateToken } = require("../utils/token");

   module.exports.signup = async (req, res) => {
     try { 
        console.log(req.body);
       const user = await signupService(req.body);
       const token = generateToken(user);
       res.status(200).json({  
         token 
       });
     }
     catch (error) {  
       res.status(401).json({ 
        error: error.message
       })
     } 
   } 
   // login function 
   module.exports.login = async (req, res) => {
     try {
       const { email, password } = req.body;
    
       if (!email || !password) {
         return res.status(401).json({ 
           status: "fail",
           error: "Please provide your credentials",
         });
       }
   
       const user = await findUserByEmail(email);
   
       if (!user) {
         return res.status(401).json({
           status: "fail",
           error: "No user found. Please create an account",
         });
       }
       const isPasswordValid = user.comparePassword(password, user.password);
       if (!isPasswordValid) {
         
         return res.status(401).json({
           status: "fail",
           error: "Password is not correct",
         });
       }
       if (user.status !== "active") {
         return res.status(401).json({
           status: "fail",
           error: "Your account is not active yet.",
         });
       }
       const token = generateToken(user);
       const { password: pwd, ...others } = user.toObject();
       res.status(200).json({
         status: "success",
         message: "Successfully logged in",
         token : token,
         data:others
       });
     } catch (error) {
     
       res.status(401).json({
         status: "fail",
         error:error.message
       });
     }
   };
   // profile get 
 
 