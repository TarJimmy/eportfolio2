var express =   require('express')
    Models  =   require('../models'),
    async   =   require('async');
const router = express.Router();

router
    .get('/all', function(req, res) {
        Models.Formation
            .find()
            .exec(function(err, formations) {
                if (err) return res.status(400).json({status: false, error: err.message});
                else {
                    async.forEach(formations, (formation, next) => {
                        Models.Town
                            .findOne({'_id' : formation.townId})
                            .populate('departmentId')
                            .exec((err, town) => {
                                if (err) return res.status(404).json({status:false, error:err.message});
                                else {
                                    formation.townId = town;
                                    next();
                                }
                            });
                    }, (err) => {
                        if (err) return res.status(404).json({status:false, error:err.message});
                        else {
                            return res.status(200).json({status: true, formations: formations});
                        }
                    } )
            }
        });
});

module.exports = router;
