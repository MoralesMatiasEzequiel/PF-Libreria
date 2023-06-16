const deleteSubcategoryCtrl = require('../../controllers/subcategoryCtrls/deleteSubcategoryCtrl')

const deleteSubcategoryHandler = async (req, res) => {
    const { _id } = req.params;

    try {
        const deleted = await deleteSubcategoryCtrl(_id);

        res.status(200).send(`Subcategory has been deleted`);

    } catch (error) {
       return res.status(500).json({ description: `There's no subcategory with ID: ${_id}` });
    }
};

module.exports = deleteSubcategoryHandler;