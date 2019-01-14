const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const technologySchema = new Schema({
    author: ObjectId,
    title: String,
    content: String,
    url: String
});

module.exports = mongoose.model('Technology', technologySchema);