const mercadopago = require('mercadopago');

const getCreateOrderCtrls = async (data) => {
    mercadopago.configure({
        access_token: "TEST-7273759822704315-062219-6d2a1fb0b437e337c97d2cc1c77bae5e-1405802464"
    });
    // console.log(data[0].price);
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
            success: "http://localhost:3000/mercadopago/success",
            failure: "http://localhost:3000/mercadopago/failure",
            pending: "http://localhost:3000/mercadopago/pending",
        },
        // notification_url: "http://localhost:3001/mercadopago/webhook",  //Aquí se notifica cuando el pago ya este hecho.  
    })
    // console.log(result.init_point);
    return result;
};

module.exports = getCreateOrderCtrls;

/*
curl -X POST \
      'https://api.mercadopago.com/v1/payments' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -d '{
  "additional_info": {
    "items": [
      {
        "id": "MLB2907679857",
        "title": "Point Mini",
        "description": "Producto Point para cobros con tarjetas mediante bluetooth",
        "picture_url": "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
        "category_id": "electronics",
        "quantity": 1,
        "unit_price": 58.8
      }
    ],
    "payer": {
      "first_name": "Test",
      "last_name": "Test",
      "phone": {
        "area_code": 11,
        "number": "987654321"
      },
      "address": {}
    },
    "shipments": {
      "receiver_address": {
        "zip_code": "12312-123",
        "state_name": "Rio de Janeiro",
        "city_name": "Buzios",
        "street_name": "Av das Nacoes Unidas",
        "street_number": 3003
      }
    }
  },
  "description": "Payment for product",
  "external_reference": "MP0001",
  "installments": 1,
  "metadata": {},
  "payer": {
    "entity_type": "individual",
    "type": "customer",
    "identification": {}
  },
  "payment_method_id": "visa",
  "token": "ff8080814c11e237014c1ff593b57b4d",
  "transaction_amount": 58.8
}
*/