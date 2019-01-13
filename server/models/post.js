const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postSchema = new Schema({
    author: ObjectId,
    date: Date,
    title: String,
    content: String,
    thumbnail: String,
    gallery: Array 
});

module.exports = mongoose.model('Post', postSchema);