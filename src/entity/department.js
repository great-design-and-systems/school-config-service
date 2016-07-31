var mongoose = require('mongoose');

var DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Department Name is required.']
    },
    description: String,
    schoolId: String,
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

module.exports = mongoose.model('department', DepartmentSchema);