const User = require("../models/user");
const userRequestViewModel = require("../viewModels/requests/userRequestViewModel")
const userService = require("../services/userService")

exports.getUsers = async (req, res) => {
  users = await User.find();
  return res.json(users);
}

exports.addUser = async (req, res) => {
  const requestViewModel = userRequestViewModel(req)  
  
  try {
    const result = await userService.createUser(requestViewModel)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

