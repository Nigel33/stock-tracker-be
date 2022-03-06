const mongoose = require("mongoose")

const outletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gpsLocation: {
    type: String, 
    required: true,
  },
  ingredientOutlets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'IngredientOutlet' }]     
}) 

outletSchema.virtual('users', {
  ref: 'User', //The Model to use
  localField: '_id', //Find in Model, where localField 
  foreignField: 'outlet', // is equal to foreignField
});

// Set Object and Json property to true. Default is set to false
outletSchema.set('toObject', { virtuals: true });
outletSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("Outlet", outletSchema)
