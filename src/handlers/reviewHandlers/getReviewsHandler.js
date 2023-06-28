const getReviewsCtrl = require('../../controllers/reviewCtrls/getReviewsCtrl');

const getReviewsHandler = async (req, res) => {

    try {
        const reviews = await getReviewsCtrl();

        res.status(200).send(reviews);

    } catch (error) {
        
        res.status(500).send({ error: error.message});
    }

}

module.exports = getReviewsHandler;