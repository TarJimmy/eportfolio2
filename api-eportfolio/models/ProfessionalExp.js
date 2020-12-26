const mongoose = require('mongoose');

const ProfessionnalExpSchema = new Schema({
    title:  {
        type    :   String,
        required:   true
    },
    nameCompany:    {
        type    :   String,
        required:   true
    },
    description:    {
        type:   String,
        required:   true
    },
    startTime:  {
        type    :   Date,
        required:   true
    },
    endTime:    {
        type    :   Date,
        required:   false
    },
    linkCompany: String
});

ProfessionnalExpSchema.virtual('time')
    .get(function() {
        if (this.endTime && this.endTime != '') {
            return this.endTime - this.startTime;
        } else {
            return null;
        }
    });

module.exports = mongoose.Model('ProfessionnalExp', ProfessionnalExpSchema);
