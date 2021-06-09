const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: String,
});
module.exports = mongoose.model('Testimonials', PostSchema);