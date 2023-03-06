const express = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRoute');
const productRouter = require('./productRoute');
const customerOrdersRouter = require('./customerOrdersRoute');
const sellersRouter = require('./sellersRoute');

const checkoutRoute = require('./checkoutRoute');
const { validateToken } = require('../middlewares/validateToken');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/register', registerRouter);
routers.use('/customer/products', productRouter);
routers.use('/customer/checkout', validateToken, checkoutRoute);
routers.use('/customer/orders', customerOrdersRouter);
routers.use('/sellers', sellersRouter);

module.exports = routers;