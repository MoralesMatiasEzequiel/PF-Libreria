require('../../db');
const Order = require('../../collections/Order');

const getOrdersCtrl = async () => {
    const orders = await Order.find();

    return orders;
};

module.exports = getOrdersCtrl;