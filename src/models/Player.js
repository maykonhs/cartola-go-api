const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  photo: String,
  name: String,
  position: String,
  team: String,
  probability: String,
  average: String,
  lastGrade: String,
  value: String,
  appreciation: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Player', PlayerSchema);
