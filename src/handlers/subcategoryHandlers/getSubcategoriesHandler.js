const getSubcategoriesCtrl = require('../../controllers/subcategoryCtrls/getSubcategoriesCtrl');


const getSubcategoriesHandler = async (req, res) => {

    try {
        const subcategories = await getSubcategoriesCtrl();

        res.status(200).send(subcategories);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getSubcategoriesHandler;