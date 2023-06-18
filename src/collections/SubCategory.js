const { Schema, model } = require('mongoose');

const categoryEnum = ['Artística', 'Oficina', 'Escolar', 'Papelería'];

const subcategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
      },
      message: 'Invalid name'
    }
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