const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const { ADMIN, MANAGER, EMPLOYEE } = require("../constants/userTypes")
const { validateUserType } = require("../middleware/auth.js");

router.get("/", validateUserType([ ADMIN ]), usersController.getUsers)
router.post("/", validateUserType([ ADMIN ]), usersController.addUser);

module.exports = router
