const Models = require("../models")
const { Outlet } = Models

exports.populateIngredientOutletsAndIngredient = async (outletId) => {
  return await Outlet.findById(outletId).
    populate({
      path: 'ingredientOutlets',
      populate: {
        path: 'ingredient'
      }      
    })   
}


