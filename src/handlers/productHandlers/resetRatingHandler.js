require('../../db');
const Product = require('../../collections/Product');

const resetRatingHandler = async (req, res) => {
  try {
    // Actualizar todas las entradas de la colección "Product" y agregar las propiedades de las reseñas con valor 0
    await Product.updateMany({}, {
      $set: {
        oneStarReviews: 0,
        twoStarsReviews: 0,
        threeStarsReviews: 0,
        fourStarsReviews: 0,
        fiveStarsReviews: 0
      }
    });

    res.status(200).json({ message: 'Se agregaron las propiedades de reseñas a todas las entradas de Product' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al agregar las propiedades de reseñas' });
  }
};

module.exports = resetRatingHandler;