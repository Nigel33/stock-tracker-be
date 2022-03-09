const userRequestViewModel = (req) => {
  const { username, outletId, password, userType } = req.body
  
  return {    
    username,
    outletId,
    password,
    userType,
  }
}

module.exports = userRequestViewModel

