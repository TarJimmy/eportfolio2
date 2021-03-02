const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SkillSchema = new Schema({
        title: {
            type        : String,
            required    : true
        },
        type: {
            type        : String,
            required    : true
        },
        image: {
            type        : String,
            required    : false
        }
    });
module.exports = mongoose.model('Skill', SkillSchema);
