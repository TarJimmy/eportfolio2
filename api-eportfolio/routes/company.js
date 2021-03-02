var express     =   require('express'),
    router      =   express.Router(),
    Models      =   require('../models');

router.get('/all', function(req, res) {
    Models.Company
        .find()
        .exec((err, companies) => {
            if (err) return res.status(400).json({status: false, err: err.message});
            else {
                return res.status(200).json({status: true, companies: companies});
            }
        });
});

router.get('/details/:id([a-z0-9]{24})', function(req, res) {
    let companyId = req.params.id;
    Models.Company
        .findOne({_id: companyId})
        .exec((err, company) => {
            if (err) return res.status(400).json({status: false, err: err.message});
            else {
                return res.status(200).json({status: true, company: company});
            }
        });
});

module.exports = router;
