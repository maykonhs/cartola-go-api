const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  round: String,
  teams: [
    {
      name: String,
      points: String,
    }
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('History', HistorySchema);
