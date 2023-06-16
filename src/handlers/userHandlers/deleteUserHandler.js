const deleteUserCtrl = require('../../controllers/userCtrls/deleteUserCtrl');

const deleteUserHandler = async (req, res) => {
    const { _id } = req.params;

    try {
        const deleted = await deleteUserCtrl(_id);

        res.status(200).send(deleted);

    } catch (error) {
       return res.status(500).json({ error: error.message, description: `Correctly enter the ID you want to delete` }) //"Introduce correctamente el ID que quieres eliminar".
    }
};

module.exports = deleteUserHandler;