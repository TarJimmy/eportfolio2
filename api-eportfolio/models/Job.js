const mongoose = require('mongoose'),
    Schema  = mongoose.Schema,
    JobSchema  =   new Schema({
        title: {
            type        : String,
            required    : true
        },
        typeContract: {
            type        : String,
            enum        : ['CDD','CDI', 'interim', 'stage'],
            required    : true
        },
        typeJob: {
            type        : String,
            enum        : ['summer','webProgramming'],
            required    : true
        },
        description: {
            type        :   String,
            required    :   true
        },
        startDate: {
            type        : Date,
            required    : true
        },
        endDate: {
            type        : Date,
            required    : true
        },
        companyId: {
            type        : Schema.Types.ObjectId,
            ref         :   'Company',
            required    : true
        },
        image: {
            type        : String,
            required    : false
        }
    });

module.exports = mongoose.model('Job', JobSchema);
