const Ingredient = require("../models/ingredient")

const ingredientService = require("../services/ingredientService")
const ingredientOutletService = require("../services/ingredientOutletService")

const ingredientRequestViewModel = require("../viewModels/requests/ingredientRequestViewModel")

exports.getIngredients = async (req, res) => {  
  ingredients = await Ingredient.find();  
  return res.json(ingredients);
}

exports.createAndAssignIngredientsToOutlets = async (req, res) => {
  const requestViewModel = ingredientRequestViewModel(req)  
  
  try {
    const ingredientObj = await ingredientService.createIngredient(requestViewModel)     
    
    if (ingredientObj) {
      const result = await ingredientOutletService.assignAmountToOutlets(requestViewModel, ingredientObj)

      return res.status(201).json(result);
    }

    return res.status(400).json({ message: "There was an unexpected issue" })
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
}

exports.getAmountForAllOutlets = async (req, res) => {
  const { id } = req.params
  
  try {
    const ingredientOutletsViewModel = await ingredientService.getAmountForAllOutlets(id)
    return res.json(ingredientOutletsViewModel)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}


