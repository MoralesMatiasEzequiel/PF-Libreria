const getCategoryCtrl = require('../../controllers/categoryCtrls/getCategories');


const getCategoryHandler = async (req, res) => {

    try {
        const categories = await getCategoryCtrl();

        res.status(200).send(categories);

    } catch (error) {
        res.status(400).send({ error: error.message }); 
    }
};

module.exports = getCategoryHandler;