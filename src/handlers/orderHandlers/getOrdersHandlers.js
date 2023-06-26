const getOrdersCtrl = require('../../controllers/orderCtrls/getOrdersCtrl');

const getOrdersHandler = async (req, res) => {

    try {
        const orders = await getOrdersCtrl();

        res.status(200).send(orders);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getOrdersHandler;