const getSubcategoryCtrl = require('../../controllers/subcategoryCtrls/getSubcategoriesCtrl');


const getSubcategoryHandler = async (req, res) => {

    try {
        const subcategories = await getSubcategoryCtrl();

        res.status(200).send(subcategories);

    } catch (error) {
        res.status(400).send({ error: error.message }); 
    }
};

module.exports = getSubcategoryHandler;