const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const mediaSchema = new Schema({
    author: ObjectId,
    name: String,
    url: String
});

module.exports = mongoose.model('Media', mediaSchema);