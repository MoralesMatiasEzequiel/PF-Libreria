const getCreateOrderCtrls = require('../../controllers/mercadopagoCtrls/getCreateOrderCtrls')

const getCreateOrderHandler = async (req, res) => {

    try {
        const createOrder = await getCreateOrderCtrls();

        res.status(200).send(createOrder.body);

    } catch (error) {
       return res.status(500).json('Error create orden');
    }
};

module.exports = getCreateOrderHandler;