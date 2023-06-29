require('../../db');
const Product = require('../../collections/Product');

const resetRatingHandler = async (req, res) => {
  try {
    // Actualizar todas las entradas de la colección "Product" y establecer su propiedad "rating" en 0
    await Product.updateMany({}, { $set: { rating: 0 } });

    res.status(200).json({ message: 'El rating se ha restablecido a 0 para todas las entradas de Product' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al restablecer el rating' });
  }
};

module.exports = resetRatingHandler;