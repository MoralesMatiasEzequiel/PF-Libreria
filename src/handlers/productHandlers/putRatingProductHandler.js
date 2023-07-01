const putRatingProductCtrl = require('../../controllers/productCtrls/putRatingProductCtrl');

const putRatingProductHandler = async (req, res) => {
    const { _id, oneStarReviews, twoStarsReviews, threeStarsReviews, fourStarsReviews, fiveStarsReviews} = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (oneStarReviews && typeof oneStarReviews !== 'number') ||
        (twoStarsReviews && typeof twoStarsReviews !== 'number') ||
        (threeStarsReviews && typeof threeStarsReviews !== 'number') ||
        (fourStarsReviews && typeof fourStarsReviews !== 'number') ||
        (fiveStarsReviews && typeof fiveStarsReviews !== 'number')
    ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }
      
      const productUpdate = await putRatingProductCtrl(_id, oneStarReviews, twoStarsReviews, threeStarsReviews, fourStarsReviews, fiveStarsReviews)
    
      return res.status(200).json(productUpdate);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = putRatingProductHandler;