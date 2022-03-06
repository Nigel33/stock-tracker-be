const Outlet = require("../models/outlet")
const outletViewModel = require("../viewModels/outletViewModel")

exports.getIngredientsInOutlet = async (outletId) => {  
  return outletViewModel.populateIngredientOutletsAndIngredient(outletId)
}


//MAINTAIN REFERENCES 

exports.addReferencesForIngredientOutlets = async (outletId, ingredientOutletsArray) => {
  const referencedIngredientOutlets = ingredientOutletsArray.filter(x => x.outlet.toString() === outletId)
  
  return await Outlet.findByIdAndUpdate(
    { _id: outletId },
    { $push: { ingredientOutlets: referencedIngredientOutlets } },    
    { new : true }
  )   
}