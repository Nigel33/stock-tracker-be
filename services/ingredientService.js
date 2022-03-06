const Models = require("../models")
const { Ingredient } = Models
const { sanitizeStringInput } = require("../helpers/string")
const ingredientViewModel = require("../viewModels/ingredientViewModel")
const ingredientOutlet = require("../models/ingredientOutlet")

// const tableService = require("./tableService")

exports.createIngredient = async requestViewModel => {
  const { name } = requestViewModel
  const ingredient = new Ingredient({
    name: sanitizeStringInput(name),
  })
  const res = await ingredient.save()

  return res
}

exports.getAmountForAllOutlets = async (ingredientId) => {  
  return ingredientViewModel.populateIngredientOutletsAndOutlet(ingredientId)
}

//MAINTAINING REFERENCES

exports.addReferencesForIngredientOutlets = async (ingredientId, ingredientOutletsArray) => { 
  return await Ingredient.findByIdAndUpdate(
    { _id: ingredientId },
    { $push: { ingredientOutlets: ingredientOutletsArray } },    
    { new : true }
  )  
}