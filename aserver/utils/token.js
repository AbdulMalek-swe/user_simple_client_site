const jwt = require("jsonwebtoken")
exports.generateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
         
    }
    const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: '4d'
    })
    return token;
}