const deleteUserCtrl = require('../../controllers/userCtrls/deleteUserCtrl');

const deleteUserHandler = async (req, res) => {
    const { _id } = req.params;

    try {
        const deleted = await deleteUserCtrl(_id);

        res.status(200).send(`User has been deleted`);

    } catch (error) {
       return res.status(500).json({ description: `There's no user with ID: ${_id}` }) //"Introduce correctamente el ID que quieres eliminar".
    }
};

module.exports = deleteUserHandler;