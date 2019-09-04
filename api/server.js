const express = require('express');
const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers-router');
const server = express();



// global middleware goes here
server.use(express.json())
// server.use(uppercaser) // using custom middleware globally. Executed in the order it's defined

server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

// route handlers
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up..'})
})




module.exports = server;