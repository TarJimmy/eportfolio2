var express = require('express'),
    router = express.Router(),
    uid = require('uid-safe')

/* GET users listing. */
router.get('/', function(req, res, next) {
    var strUid = uid.sync(18);

    res.json({guid: strUid});
});

module.exports = router;
