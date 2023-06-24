const { Router } = require('express');
const { getCreateOrderHandler, getSuccessHandler, getFailureHandler } = require('../handlers/mercadopagoHandlers/indexHandlers');


const mercadoPagoRouter = Router();

mercadoPagoRouter.post('/create-order', getCreateOrderHandler);

mercadoPagoRouter.get('/success', getSuccessHandler);

mercadoPagoRouter.get('/failure', getFailureHandler);

mercadoPagoRouter.get('/pending', );

mercadoPagoRouter.post('/webhook', );


module.exports = mercadoPagoRouter;
//getSuccessHandler    getWebhookHandler