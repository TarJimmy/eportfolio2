var express     =   require('express'),
    router      =   express.Router(),
    async   =   require('async'),
    Models      =   require('../models');

router.get('/all', function(req, res) {
    async.parallel({
        languages: (callback) => {
            Models.Language.find().exec(callback);
        },
        frameworks: (callback) => {
            Models.Framework.find().exec(callback);
        },
        skills: (callback) => {
            Models.Skill.find().exec(callback);
        }
    }, (err, results) => {
        if (err) return res.status(404).json({ status: false, err: err.message });
        else {
            return res.status(200).json(results)
        }
    })
});

module.exports = router;
