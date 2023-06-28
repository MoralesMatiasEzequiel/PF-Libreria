const postReviewCtrl = require('../../controllers/reviewCtrls/postReviewCtrl');
const putUserCtrl = require('../../controllers/userCtrls/putUserCtrl');

const postReviewHandler = async (req, res) => {

    const { user, rating, message } = req.body;

    try {

        if(!user || !rating){
            return res.status(400).send('Mising data');
        }

        if(
            typeof rating !== 'number' ||
            (message && typeof message !== 'string')
        ){
            return res.status(400).send('Incorrect Datatype')
        }

        if(
            rating < 1 ||
            rating > 5
        ){
            return res.status(400).send('Rating must be between 1 and 5')
        }

        if(
            message && message.length > 500
        ){
            return res.status(400).send('Message must be up to 500 characters')
        }

        const newReview = await postReviewCtrl(user, rating, message);
        
        //A PARTIR DE ACÁ ES CÓDIGO PARA ASOCIAR LA REVIEW AL USER
        const reviews = [newReview._id];
        const _id = user;
        const saveReviewIntoUser = await putUserCtrl(_id, null, null, null, null, null, null, reviews, null, null);

        return res.status(200).send('La reseña ha sido creada');
        
    } catch (error) {
        res.status(500).send(error.message);
    }

}

module.exports = postReviewHandler;