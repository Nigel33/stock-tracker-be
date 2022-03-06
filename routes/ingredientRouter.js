const express = require('express')
const router = express.Router()
const ingredientsController = require('../controllers/ingredientsController')
const { ADMIN } = require("../constants/userTypes")
const { validateUserType } = require("../middleware/auth.js");

router.get("/", ingredientsController.getIngredients)
router.post('/createAndAssignToOutlets', validateUserType([ADMIN]), ingredientsController.createAndAssignIngredientsToOutlets)
router.get("/getAmountForAllOutlets/:id", validateUserType([ADMIN]), ingredientsController.getAmountForAllOutlets)
// router.post("/", usersController.addUser);

module.exports = router
