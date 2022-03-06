const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },  
  password: {
    type: String,
    select: false, 
    required: true,
  },
  userType: {    
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserType",    
  },
  outlet: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Outlet',
  }
}) 

module.exports = mongoose.model("User", userSchema)

