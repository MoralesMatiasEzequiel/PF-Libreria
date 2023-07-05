const mercadopago = require('mercadopago');

const getCreateOrderCtrls = async (data) => {
    mercadopago.configure({
        access_token: "TEST-1788868810849886-062111-038d8e78e6211c575f9dc76a1a743ed9-701537376"
    });
    // console.log(data);
    const items = data.map((item) => {
      return {
        title: item.name,
        unit_price: item.price,
        currency_id: "ARS",
        quantity: 1,
      };  
    });
    
    const result = await mercadopago.preferences.create({ //Aquí creamos una orden de compra
      items: items,
      back_urls: { //Aquí especificamos hacía dónde queremos enviar una respuesta.
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/mercadopago/failure",
        pending: "http://localhost:3000/mercadopago/pending",
      },
    })
    // console.log(result);
    return result;
};

module.exports = getCreateOrderCtrls;