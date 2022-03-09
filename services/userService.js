const { MANAGER, EMPLOYEE } = require("../constants/userTypes")
const User = require("../models/user")
const bcryptService = require("./bcryptService")

exports.createUser = async requestViewModel => {  
  if ( (requestViewModel.userType === MANAGER || 
    requestViewModel.userType === EMPLOYEE) &&
    !requestViewModel.outletId ) {
    throw new Error("This user needs to be assigned to an outlet")
  }

  const encryptedPassword = await bcryptService.encryptPassword(requestViewModel.password)

  const user = new User({
    username: requestViewModel.username,
    userType: requestViewModel.userType,
    password: encryptedPassword,
    outlet: requestViewModel.outletId,
  })
  
  await user.save()
}

exports.getIngredientsInOutlet = async (outletId) => {  
  return outletViewModel.populateIngredientOutletsAndIngredient(outletId)
}

exports.getOutletsDictionary = async () => {
  return outletViewModel.getDictionary()
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