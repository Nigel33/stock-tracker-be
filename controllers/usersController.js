// const tableService = require("../services/tableService")
const User = require("../models/user");

exports.getUsers = async (req, res) => {
  users = await User.find();
  return res.json(users);
  // return res.json({ message: users });
  
  // try {
  //   const tables = await tableService.getAllTablesFullInfo()
  //   return res.json(tables)
  // } catch (err) {
  //   return res.status(500).json({ message: err.message })
  // }
}

exports.addUser = async (req, res) => {
  const data = new User({
    label: 'test',    
    test: 'dsddsd',
  });

  console.log(data);

  const result = await data.save();
  console.log(result);
  return res.json(result);
}

