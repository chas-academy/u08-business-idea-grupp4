const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
  },
});

// Export model
module.export = mongoose.model("Recipe", recipeSchema);
