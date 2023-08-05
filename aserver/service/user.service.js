const User = require("../model/user.model");

 
exports.signupService =async (userData)=>{
    const user = await User.create(userData);
    console.log(user);
    return user;
}
exports.findUserByEmail =async (email)=>{
   return await User.findOne({email})
}
exports.findUserByToken =async (token)=>{
   
  const result = await User.findOne({confirmationToken:token})
 
  return result;  
 }

 