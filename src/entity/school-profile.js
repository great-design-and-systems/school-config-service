var mongoose = require('mongoose');

var SchoolProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'School Name is required.']
    },
    address: String,
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

module.exports = mongoose.model('schoolProfile', SchoolProfileSchema);