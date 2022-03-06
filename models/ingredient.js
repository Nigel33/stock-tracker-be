const mongoose = require("mongoose")

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },  
  ingredientOutlets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'IngredientOutlet' }]      
}) 

module.exports = mongoose.model("Ingredient", ingredientSchema)

