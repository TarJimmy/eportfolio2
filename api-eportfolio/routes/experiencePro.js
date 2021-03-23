var express     =   require('express'),
    router      =   express.Router(),
    async       =   require('async'),
    Models      =   require('../models');

router.get('/all', function(req, res) {
    Models.Job
        .find()
        .populate('companyId')
        .lean()
        .exec((err, jobs) => {
           if (err) return res.status(400).json({status: false, err: err.message});
           else {
               async.forEach(jobs, (job, nextJob) => {
                   if (job.environment) {
                       job.envName = [];
                       async.forEach(job.environment, (envId, nextEnv) => {
                            Models.Language.findOne({_id: envId}).select('title').exec((err, language) => {
                                if (err) console.error(err.message);
                                else {
                                    if (language) {
                                        job.envName.push(language.title);
                                        nextEnv();
                                    } else {
                                        Models.Framework.findOne({_id: envId}).select('title').exec((err, framework) => {
                                            job.envName.push(framework.title);
                                            nextEnv();
                                        });
                                    }
                                }
                            })
                       }, (err) => {
                           if (err) console.error(err.message);
                           nextJob();
                       });
                   } else {
                       nextJob();
                   }
               }, function(err) {
                   return res.status(200).json({status: true, experiencePro: jobs});
               });
           }
        });
});

module.exports = router;
