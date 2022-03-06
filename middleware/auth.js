const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET_KEY
const { extractToken }= require("../helpers/authorization")

exports.validateUserType = (userTypes) => { 
  return (req, res, next) => {    
    const token = extractToken(req)
   
    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          if (!userTypes.includes(decodedToken.userType)) {
            return res.status(401).json({ message: "Not authorized" })
          } else {
            next()
          }
        }
      })
    } else {
      return res
        .status(401)
        .json({ message: "Not authorized, token not available" })
    }
  }  
}

