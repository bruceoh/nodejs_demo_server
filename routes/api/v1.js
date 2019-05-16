var router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('testing api');
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to v1'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to v1'
    });
});



module.exports = router;


