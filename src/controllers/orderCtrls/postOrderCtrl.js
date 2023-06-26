const Order = require('../../collections/Order');

const postOrderCtrl = async (email, name, surname, phone, dni, street, number, floor, apartment, province, city, comentary, products, finalPrice) => {
  
    const newOrder = {
        email,
        name,
        surname, 
        phone, 
        dni, 
        street, 
        number, 
        floor, 
        apartment, 
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