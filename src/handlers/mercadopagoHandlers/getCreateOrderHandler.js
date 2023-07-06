const getCreateOrderCtrls = require('../../controllers/mercadopagoCtrls/getCreateOrderCtrls')

const getCreateOrderHandler = async (req, res) => {
    
    const data = req.body;

    try {
        if (!data || data.length === 0) { 
            return res.status(400).json({ error: 'Missing data required' });
        }

        const createOrder = await getCreateOrderCtrls(data);
        const paymentLink = createOrder.body.init_point;
        
        res.status(200).send(paymentLink);

    } catch (error) {
       return res.status(500).json('Error create order');
    }
};

module.exports = getCreateOrderHandler;