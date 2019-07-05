const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: String,
  tactic: String,
  player1: String,
  player2: String,
  player3: String,
  player4: String,
  player5: String,
  player6: String,
  player7: String,
  player8: String,
  player9: String,
  player10: String,
  player11: String,
  captain: String,
  coach: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Team', TeamSchema);
