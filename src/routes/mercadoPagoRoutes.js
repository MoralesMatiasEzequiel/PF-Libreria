const { Router } = require('express');
const { getCreateOrderHandler } = require('../handlers/mercadopagoHandlers/indexHandlers');


const mercadoPagoRouter = Router();

mercadoPagoRouter.post('/create-order', getCreateOrderHandler);

mercadoPagoRouter.get('/success', );

mercadoPagoRouter.get('/failure', );

mercadoPagoRouter.get('/pending', );

mercadoPagoRouter.post('/webhook', );


module.exports = mercadoPagoRouter;
//getSuccessHandler    getWebhookHandler