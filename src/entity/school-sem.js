var mongoose = require('mongoose');

var SchoolSemSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'School Sem Description is required.']
    },
    dateStart: {
        type: Date,
        required: [true, 'School Sem date start is required.']
    },
    dateEnd: {
        type: Date,
        required: [true, 'School Sem date end is required.']
    },
    schoolYearId : String,
    createdBy: {
        type: String,
        required: [true, 'Created By is required.']
    },
    createdOn: { type: Date, default: Date.now },
    updatedBy: {
        type: String,
        required: [true, 'Updated By is required.']
    },
    updatedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('schoolSem', SchoolSemSchema);