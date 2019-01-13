const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const sliderSchema = new Schema({
    id: ObjectId,
    url: String
});

module.exports = mongoose.model('Slider', sliderSchema);