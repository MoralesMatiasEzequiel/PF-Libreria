require('dotenv').config()

const { Router } = require('express');
const { auth } = require('express-openid-connect');

const authRouter = Router();
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH_SECRET,
    baseURL: 'http://localhost:3001',
    clientID: 'YdqQ1k6ss8xNoPO1R4i5x1CClSWlLyN6',
    issuerBaseURL: 'https://dev-hvcwq2kzvdk8sy6d.us.auth0.com'
  };

authRouter.use(auth(config));

authRouter.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

module.exports = authRouter;