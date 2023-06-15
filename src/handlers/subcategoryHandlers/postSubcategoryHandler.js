const postSubcategoryCtrl = require('../../controllers/subcategoryCtrls/postSubcategoryCtrl');

const postSubcategoryHandler = async (req, res) => {

    const { name, categories } = req.body;

    try {
        
        if(!name){
            return res.status(400).send({ error: 'Missing data' });
        }

        const newSubcategory = await postSubcategoryCtrl(name, categories);

        res.status(200).json(newSubcategory);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = postSubcategoryHandler;