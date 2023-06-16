const getUsersCtrl = require('../../controllers/userCtrls/getUsersCtrl');


const getUsersHandler = async (req, res) => {
    // const { title } = req.query;  

    try {
        // const user = await getUserCtrl(title);
        const user = await getUsersCtrl();

        // console.log(user);
        res.status(200).send(user);

    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

module.exports = getUsersHandler;