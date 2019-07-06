const mongoose = require('mongoose');

const MatchesSchema = new mongoose.Schema({
  round: String,
  matches: [
    {
      home: String,
      visitor: String,
    }
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Matches', MatchesSchema);
