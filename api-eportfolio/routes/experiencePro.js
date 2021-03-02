var express     =   require('express'),
    router      =   express.Router(),
    Models      =   require('../models');

router.get('/all', function(req, res) {
    Models.Job
        .find()
        .populate('companyId')
        .exec((err, jobs) => {
           if (err) return res.status(400).json({status: false, err: err.message});
           else {
               return res.status(200).json({status: true, experiencePro: jobs});
           }
        });
});

module.exports = router;
