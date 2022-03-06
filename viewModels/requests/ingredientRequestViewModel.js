const ingredientOutletRequestViewModel = require("./ingredientOutletRequestViewModel")

const ingredientRequestViewModel = (req) => {
  const { name, ingredientOutlets } = req.body
  
  return {    
    name,
    ingredientOutlets: ingredientOutlets.map(x => {
      return ingredientOutletRequestViewModel(x)
    })
  }
}

module.exports = ingredientRequestViewModel

