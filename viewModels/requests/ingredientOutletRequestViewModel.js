const ingredientOutletRequestViewModel = ingredientOutlet => {
  const { ingredientId, outletId, amount } = ingredientOutlet
  
  return {
    ingredientId,
    outletId,
    amount,
  }
}

module.exports = ingredientOutletRequestViewModel

