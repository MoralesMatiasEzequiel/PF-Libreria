const getUsersByNameCtrl = require('../../controllers/userCtrls/getUsersByNameCtrl');

const getUsersByNameHandler = async (req, res) => {
    const { name } = req.query;  

    try {
        const usersByName = await getUsersByNameCtrl(name);

        if (usersByName.length === 0) {
            return res.status(404).send(`No users found with name: "${name}"`);
        }

        res.status(200).send(usersByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getUsersByNameHandler;