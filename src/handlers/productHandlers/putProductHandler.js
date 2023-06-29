const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl');

const putProductHandler = async (req, res) => {
    const { _id, name, brand, stock, price, salePrice, image, description, oneStarReviews, twoStarsReviews, threeStarsReviews, fourStarsReviews, fiveStarsReviews, active, subcategories } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (name && typeof name !== 'string') ||
        (brand && typeof brand !== 'string') ||
        (stock && typeof stock !== 'number') ||
        (price && typeof price !== 'number') ||
        (salePrice && typeof salePrice !== 'number') ||
        (image && typeof image !== 'string') ||
        (description && typeof description !== 'string') ||
        (oneStarReviews && typeof oneStarReviews !== 'number') ||
        (twoStarsReviews && typeof twoStarsReviews !== 'number') ||
        (threeStarsReviews && typeof threeStarsReviews !== 'number') ||
        (fourStarsReviews && typeof fourStarsReviews !== 'number') ||
        (fiveStarsReviews && typeof fiveStarsReviews !== 'number') ||
        (active && typeof active !== 'boolean') ||
        (subcategories && !Array.isArray(subcategories))
    ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }
      
      const productUpdate = await putProductCtrl(_id, name, brand, stock, price, salePrice, image, description, oneStarReviews, twoStarsReviews, threeStarsReviews, fourStarsReviews, fiveStarsReviews, active, subcategories)
    
      return res.status(200).send(`El producto ha sido actualizado`);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putProductHandler;