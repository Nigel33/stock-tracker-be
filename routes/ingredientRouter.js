const express = require('express')
const router = express.Router()
const ingredientsController = require('../controllers/ingredientsController')

router.get("/", ingredientsController.getIngredients)
router.post('/createAndAssignToOutlets', ingredientsController.createAndAssignIngredientsToOutlets)
router.get("/getAmountForAllOutlets/:id", ingredientsController.getAmountForAllOutlets)
// router.post("/", usersController.addUser);

module.exports = router
