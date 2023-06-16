const { Schema, model } = require('mongoose');

const categoryEnum = ['Artística', 'Oficina', 'Escolar', 'Papelería'];

const subcategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  categories: {
    type: [{
      type: String,
      enum: categoryEnum
    }],
    required: true
  }
});

const Subcategory = model('Subcategory', subcategorySchema);

module.exports = { Subcategory, categoryEnum };