const createCategory = require('../../controllers/categoryCtrls/postCategoryCtrl');

const postCategoryHandler = async (req, res) => {

    const { name, subcategories } = req.body;

    try {
        
        if(!name){
            return res.status(400).send({ error: 'Missing data' });
        }

        const newCategory = await createCategory(name, subcategories);

        res.status(200).json(newCategory);

    } catch (error) {
        
        if(error.message) res.status(400).send(error);
        res.status(500).send(error.message);

    }
};

module.exports = postCategoryHandler;