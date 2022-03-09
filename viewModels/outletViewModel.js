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

exports.getDictionary = async () => {
  const outlets = await Outlet.find()

  return outlets.map(x => {
    return { _id: x._id, value: x.name }
  })
}




