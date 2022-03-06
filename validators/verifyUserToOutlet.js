const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET_KEY
const { extractToken } = require('../helpers/authorization')

const verifyUserToOutlet = (req, outletId) => {
  const token = extractToken(req)
  let result = false

  jwt.verify(token, jwtSecret, (err, decodedToken) => {    
    if (err) {      
      return false
    }   
    
    if (decodedToken.outlet._id.toString() === outletId) {
      result = true
    } else {
      result = false
    }    
  })
  
  return result
}


module.exports = verifyUserToOutlet