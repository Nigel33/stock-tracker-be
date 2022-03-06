const { sanitizeIntegerInput } = require("../helpers/number")
const IngredientOutlet = require("../models/ingredientOutlet")

const outletService = require("./outletService")
const ingredientService = require("./ingredientService")

exports.assignAmountToOutlets = async (requestViewModel, ingredientObj) => {
  const { ingredientOutlets } = requestViewModel
  const list = []    
  const outletIds = []
  
  for (let i = 0; i < ingredientOutlets.length; i++) {
    const { amount, outletId } = ingredientOutlets[i]      
    
    outletIds.push(outletId)

    let ingredientOutlet = new IngredientOutlet({
      outlet: outletId,
      ingredient: ingredientObj,         
      amount: sanitizeIntegerInput(amount)       
    })      
     
    list.push(ingredientOutlet)
  }  

  const ingredientOutletsArray = await IngredientOutlet.insertMany(list)

  if (ingredientOutletsArray) {    
    ingredientService.addReferencesForIngredientOutlets(ingredientObj._id, ingredientOutletsArray)
    outletIds.forEach(outletId => {
      outletService.addReferencesForIngredientOutlets(outletId, ingredientOutletsArray)
    })
    
  }

  return ingredientOutletsArray
}

exports.updateIngredientAmount = async (ingredientOutletId, ingredientOutletRequestViewModel) => {
  const { amount } = ingredientOutletRequestViewModel
  
  return await IngredientOutlet.findByIdAndUpdate(
    { _id: ingredientOutletId },
    { $set: { amount: sanitizeIntegerInput(amount) } },    
    { new : true }
  )  
}

