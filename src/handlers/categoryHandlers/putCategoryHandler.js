const putCategoryCtrl = require('../../controllers/categoryCtrls/putCategory');

const putCategoryHandler = async (req, res) => {
    const { _id, name, subcategories} = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      const categoryUpdate = await putCategoryCtrl(_id, name, subcategories);
    
      res.status(200).send(categoryUpdate);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = putCategoryHandler;