const bcrypt = require('bcryptjs')

exports.encryptPassword = async (password) => { 
  return await bcrypt.hash(password, 10)
}