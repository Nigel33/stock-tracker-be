const Models = require("../models")
const { Ingredient } = Models

exports.populateIngredientOutletsAndOutlet = async (ingredientId) => {
  return await Ingredient.findById(ingredientId).
    populate({
      path: 'ingredientOutlets',
      populate: {
        path: 'outlet'
      }      
    })   
}


