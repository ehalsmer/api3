const express = require('express');

const router = express.Router();

router.use(express.json());

// this router handles urls that begin with /products

// GET to /products/
// the /products part is a given, we only need /
router.get('/', (req, res) => {
    res.send('get to /products/')
})


// GET to /products/:id
// the /products part is a given, we only need /:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`get to /products/${id}`)
})

module.exports = router;