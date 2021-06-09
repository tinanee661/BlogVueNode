const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    emri: String,
    mbiemri: String,
    email: String,
  
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Porofiles', ProfilSchema);