const mongoose = require('mongoose');

var student = mongoose.model('students', {
    id: { type: String },
    name: { type: String },
    mssv: { type: String },
    sdt: { type: Number },
    truong: { type: String }
});

module.exports = { student };