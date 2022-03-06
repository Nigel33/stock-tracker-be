const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET_KEY

const User = require("../models/user")

exports.login = async (req, res) => {
  const { username, password } = req.body
  // Check if username and password is provided
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    })
  }
  try {
    const user = await User.findOne({ username }).populate("outlet")   
    if (!user) {
      res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      })
    } else {
      // comparing given password with hashed password
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign(
            { id: user._id, username, userType: user.userType, outlet: user.outlet },
            jwtSecret,
            {
              expiresIn: maxAge, // 3hrs in sec
            }
          )
          
          res.status(201).json({
            message: "User successfully Logged in",
            user: { id: user._id, username, userType: user.userType },
            outlet: user.outlet,
            token
          })
        } else {
          res.status(400).json({ message: "Login not succesful" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    })
  }
}
  