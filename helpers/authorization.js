exports.extractToken = (req) => {
  const authorization = req.headers.authorization
  let token = null

  if (authorization) {
    const arrayEls = authorization.split(" ")      
    token = arrayEls[arrayEls.length - 1]
  }

  return token
}