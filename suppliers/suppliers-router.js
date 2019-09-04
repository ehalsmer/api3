const express = require('express');

const router = express.Router(); // don't forget to invoke Router();

router.use(express.json());

function uppercaser(req, res, next) {
    let name = req.params.name;

    if (name) {
        req.name = name.toUpperCase();
    }
    // res.send(`the name is: ${name}`)
    next()
}

// this router handles urls that begin with /suppliers

// GET to /suppliers/
// the /suppliers part is a given, we only need /
router.get('/', (req, res) => {
    res.send('get to /suppliers/')
})


// GET to /suppliers/:id
// the /suppliers part is a given, we only need /:id
router.get('/:name', uppercaser, (req, res) => {
    const { name } = req.params;
    res.send(`get to /suppliers/${req.name}`)
})

module.exports = router;