const outletService = require("../services/outletService")
const ingredientOutletService = require("../services/ingredientOutletService")
const ingredientOutletRequestViewModel = require("../viewModels/requests/ingredientOutletRequestViewModel")
const verifyUserToOutlet = require("../validators/verifyUserToOutlet")

exports.getIngredientsInOutlet = async (req, res) => {
  const { id } = req.params

  const isValid = verifyUserToOutlet(req, id)
  
  if (!isValid) {
    return res.status(401).json({ message: "You are not assigned to this outlet"})
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
  const requestViewModel = ingredientOutletRequestViewModel(req.body)    
  const isValid = verifyUserToOutlet(req, requestViewModel.outletId)
  
  if (!isValid) {
    return res.status(401).json({ message: "You are not assigned to this outlet"})
  }

  try {
    const result = await ingredientOutletService.updateIngredientAmount(ingredientOutletId, requestViewModel)
    return res.json(result)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

