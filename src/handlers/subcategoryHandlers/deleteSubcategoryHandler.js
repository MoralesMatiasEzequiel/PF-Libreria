const deleteSubcategoryCtrl = require('../../controllers/subcategoryCtrls/deleteSubcategoryCtrl')

const deleteSubcategoryHandler = async (req, res) => {
    const { _id } = req.params;

    try {
        const deleted = await deleteSubcategoryCtrl(_id);

        res.status(200).send(deleted);

    } catch (error) {
       return res.status(500).json({ error: error.message, description: `Correctly enter the ID you want to delete` }) //"Introduce correctamente el ID que quieres eliminar".
    }
};

module.exports = deleteSubcategoryHandler;