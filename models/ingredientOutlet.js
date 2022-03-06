const mongoose = require("mongoose")

const ingredientOutletSchema = new mongoose.Schema({  
  ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', },
  outlet: { type: mongoose.Schema.Types.ObjectId, ref: 'Outlet', },
  amount: {
    type: Number,
    required: true,
  }      
}) 

module.exports = mongoose.model("IngredientOutlet", ingredientOutletSchema)