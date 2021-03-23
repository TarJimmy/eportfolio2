var express     =   require('express'),
    router      =   express.Router(),
    async       =   require('async'),
    Models      =   require('../models');

router.get('/all', function(req, res) {
    Models.Project
        .find()
        .lean()
        .sort('ranking')
        .exec((err, projects) => {
            if (err) return res.status(400).json({status: false, err: err});
            else {
                async.forEach(projects, (project, nextP) => {
                    Models.Language.find({_id : {$in: project.languages}}).select('title').exec((err, langs) => {
                        if (err) return nextP(err);
                        else {
                            project.languages = langs;
                            Models.Framework.find({_id : {$in: project.frameworks}}).select('title').exec((err, frameworks) => {
                                if (err) return nextP(err);
                                else {
                                    project.frameworks = frameworks;
                                    if (project.hasOwnProperty('awardId') && project.awardId != '') {
                                        Models.Award.findOne({_id: project.awardId}).exec((err, award) => {
                                            if (err) return nextP(err);
                                            else {
                                                project.awardId = award;
                                                nextP();
                                            }
                                        })
                                    } else {
                                        nextP();
                                    }
                                }
                            })
                        }
                    })
                }, (err) => {
                    if (err) return res.status(400).json({status: true, err: err});
                    else {
                        return res.status(200).json({status: true, projects: projects});
                    }
                })
            }
        });
});


module.exports = router;
