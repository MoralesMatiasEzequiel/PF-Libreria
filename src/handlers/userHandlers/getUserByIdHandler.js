const getUserByIdCtrl = require('../../controllers/userCtrls/getUserByIdCtrl');

const getUserByIdHandler = async (req, res) => {
    const { _id } = req.query;  

    try {
        const userByID = await getUserByIdCtrl(_id);

        if (!userByID) {
            return res.status(404).send(`No users found with ID: "${_id}"`);
        }

        res.status(200).send(userByID);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getUserByIdHandler;