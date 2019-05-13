

var router = require('express').Router();

router.get('/api', (req, res) => {
    res.send('testing api');
});

module.exports = router;


