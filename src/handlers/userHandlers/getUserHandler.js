const getUserCtrl = require('../../controllers/userCtrls/getUserCtrl');

const getAllProductsHandler = async (req, res) => {
    const { title } = req.query;  

    try {
        const user = await getUserCtrl(title);

        console.log(user);
        res.status(200).send(user);

    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

module.exports = getAllProductsHandler;