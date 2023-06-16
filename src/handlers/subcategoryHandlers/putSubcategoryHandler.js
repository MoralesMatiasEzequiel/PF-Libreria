const putSubcategoryCtrl = require('../../controllers/subcategoryCtrls/putSubcategoryCtrl');

const putSubcategoryHandler = async (req, res) => {
    const { _id, name, categories} = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (name && typeof name !== 'string') ||
        (categories && !Array.isArray(categories))
      ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }

      const subcategoryUpdate = await putSubcategoryCtrl(_id, name, categories);
    
      res.status(200).send(subcategoryUpdate);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = putSubcategoryHandler;