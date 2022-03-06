const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },  
  password: {
    type: String,    
    required: true,
  },
  userType: {    
    type: String,
    required: true,        
  },
  outlet: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Outlet',
  }
}) 

module.exports = mongoose.model("User", userSchema)

