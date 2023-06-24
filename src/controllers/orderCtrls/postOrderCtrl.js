const Order = require('../../collections/Order');

const postOrderCtrl = async (orderNro, email, name, surname, phone, dniCuit, street, numberStreet, floor, aparment, province, city, comentary, products, finalPrice) => {
  
    const newOrder = {
        orderNro,
        email,
        name,
        surname, 
        phone, 
        dniCuit, 
        street, 
        numberStreet, 
        floor, 
        aparment, 
        province, 
        city, 
        comentary, 
        products, 
        finalPrice
    }

    const createdOrder = await Order.create(newOrder);

    return createdOrder;
};

module.exports = postOrderCtrl;