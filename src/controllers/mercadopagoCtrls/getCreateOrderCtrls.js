const mercadopago = require('mercadopago');

const getCreateOrderCtrls = async (data) => {
    mercadopago.configure({
        access_token: "TEST-7273759822704315-062219-6d2a1fb0b437e337c97d2cc1c77bae5e-1405802464"
    });
    console.log(data);
    const items = data.map((item) => {
      return {
        title: item.title,
        unit_price: item.unit_price,
        currency_id: "ARS",
        quantity: 1,
      };  
    });
    // console.log(items);

    const result = await mercadopago.preferences.create({ //Aquí creamos una orden de compra
        items: items,
        back_urls: { //Aquí especificamos hacía dónde queremos enviar una respuesta.
            success: "http://localhost:3000/mercadopago/success",
            failure: "http://localhost:3000/mercadopago/failure",
            pending: "http://localhost:3000/mercadopago/pending",
        },
    })
    return result;
};

module.exports = getCreateOrderCtrls;