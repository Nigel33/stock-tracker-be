const outletService = require("../services/outletService")
const ingredientOutletService = require("../services/ingredientOutletService")
const ingredientOutletRequestViewModel = require("../viewModels/requests/ingredientOutletRequestViewModel")

exports.getIngredientsInOutlet = async (req, res) => {
  const { id } = req.params

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

  try {
    const result = await ingredientOutletService.updateIngredientAmount(ingredientOutletId, requestViewModel)
    return res.json(result)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

