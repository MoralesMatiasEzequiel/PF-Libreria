const getUserByEmailCtrl = require('../../controllers/userCtrls/getUserByEmailCtrl');

const getUserByEmailHandler = async (req, res) => {
    const { email } = req.query;  

    try {
        const userByEmail = await getUserByEmailCtrl(email);

        if (!userByEmail) {
            return res.status(404).send(`No users found with email: "${email}"`);
        }

        res.status(200).send(userByEmail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getUserByEmailHandler;