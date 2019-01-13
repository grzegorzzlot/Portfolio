const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const pageSchema = new Schema({
    author: ObjectId,
    title: String,
    content: String,
    level: String
});

module.exports = mongoose.model('Page', pageSchema);