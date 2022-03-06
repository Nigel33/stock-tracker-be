const express = require('express')
const router = express.Router()
const outletsController = require('../controllers/outletsController')

router.get("/getIngredientsInOutlet/:id", outletsController.getIngredientsInOutlet)
router.put("/updateIngredientAmount/:ingredientOutletId", outletsController.updateIngredientAmount)

// router.post("/", usersController.addUser);

module.exports = router
