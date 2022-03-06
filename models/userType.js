const mongoose = require("mongoose")

const userTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },  
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]    
}) 

module.exports = mongoose.model("UserType", userTypeSchema)