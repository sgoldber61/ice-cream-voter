const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flavorSchema = new Schema({
  flavor: {type: String, required: true},
  votes: {type: Number, required: true}
});

module.exports = mongoose.model('flavor', flavorSchema);
