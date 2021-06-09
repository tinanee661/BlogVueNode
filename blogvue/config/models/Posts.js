const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    image: String,
    description: String,
    design: Number,
    product_link: String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Posts', PostSchema);