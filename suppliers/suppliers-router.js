const express = require('express');

const router = express.Router();

router.use(express.json());

// this router handles urls that begin with /suppliers

// GET to /suppliers/
// the /suppliers part is a given, we only need /
router.get('/', (req, res) => {
    res.send('get to /suppliers/')
})


// GET to /suppliers/:id
// the /suppliers part is a given, we only need /:id
router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.send(`get to /suppliers/${name}`)
})

module.exports = router;