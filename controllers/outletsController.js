const outletService = require("../services/outletService")
const ingredientOutletService = require("../services/ingredientOutletService")
const ingredientOutletRequestViewModel = require("../viewModels/requests/ingredientOutletRequestViewModel")
const Outlet = require("../models/outlet")
const verifyUserToOutlet = require("../validators/verifyUserToOutlet")

exports.getOutlets = async (req, res) => {
  const { decodedUser } = res.locals
  let outlets = await Outlet.find(); 

  if (decodedUser && decodedUser.outlet) {    
    outlets = outlets.filter(x => x._id.toString() === decodedUser.outlet._id)    
  }

  return res.json(outlets);
}

exports.getOutletsDictionary = async (req, res) => {
  try {
    const outletDictionaryViewModel = await outletService.getOutletsDictionary()
    return res.json(outletDictionaryViewModel)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

exports.getIngredientsInOutlet = async (req, res) => {
  const { id } = req.params
  const { decodedUser } = res.locals  

  if (decodedUser && decodedUser.outlet) {    
    if (id.toString() !== decodedUser.outlet._id) {
      return res.status(401).json({ message: "You are not authorized to do that" })     
    }     
  }

  try {
    const outletViewModel = await outletService.getIngredientsInOutlet(id)
    return res.json(outletViewModel)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

exports.updateIngredientAmount = async (req, res) => {
  const { ingredientOutletId } = req.params
  const { decodedUser } = res.locals  
  const requestViewModel = ingredientOutletRequestViewModel(req.body)    
  
  if (decodedUser && decodedUser.outlet) {    
    if (requestViewModel.outletId.toString() !== decodedUser.outlet._id) {
      return res.status(401).json({ message: "You are not authorized to do that" })     
    }     
  }

  try {
    const result = await ingredientOutletService.updateIngredientAmount(ingredientOutletId, requestViewModel)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

