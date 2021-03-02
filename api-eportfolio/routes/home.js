var express     =   require('express'),
    router      =   express.Router();

router.get('/', function(req, res) {
    return res.status(200);
});

module.exports = router;
