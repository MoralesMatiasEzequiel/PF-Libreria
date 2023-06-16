const deleteProductCtrl = require('../../controllers/productCtrls/deleteProductCtrl')

const deleteProductHandler = async (req, res) => {
    const { _id } = req.params;

    try {
        const deleted = await deleteProductCtrl(_id);

        res.status(200).send(deleted);

    } catch (error) {
       return res.status(500).json({ error: error.message, description: `Correctly enter the ID you want to delete` }) //"Introduce correctamente el ID que quieres eliminar".
    }
};

module.exports = deleteProductHandler;