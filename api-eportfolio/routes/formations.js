var express = require('express')
    router  = express.Router();

router.get('/', function(req, res, next)
{
    var strUid = uid.sync(18);

    res.json({guid: strUid});
});

module.exports = router;
