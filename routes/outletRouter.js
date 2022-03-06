const express = require('express')
const router = express.Router()
const outletsController = require('../controllers/outletsController')
const { ADMIN, MANAGER, EMPLOYEE } = require("../constants/userTypes")
const { validateUserType } = require("../middleware/auth.js");

router.get("/getIngredientsInOutlet/:id", validateUserType([ADMIN, MANAGER, EMPLOYEE]), outletsController.getIngredientsInOutlet)
router.put("/updateIngredientAmount/:ingredientOutletId", validateUserType([ADMIN, MANAGER]), outletsController.updateIngredientAmount)

// router.post("/", usersController.addUser);

module.exports = router
