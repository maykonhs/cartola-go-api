const Matches = require('../models/Matches');

module.exports = {
  async index(req, res) {
    const matches = await Matches.find().sort('-createdAt').limit(1);
    return res.json(matches);
  },
  async indexId(req, res) {
    const matches = await Matches.findById(req.params.id);
    return res.json(matches);
  },
  async store(req, res) {
    const {
      round,
      matches,
    } = req.body;
    
    const response = await Matches.create({
      round,
      matches,
    });

    return res.json(response);
  },
  async update(req, res) {
    const {
      round,
      matches,
    } = req.body;

    const matchesRound = await Matches.findById(req.params.id);

    if (round !== undefined) matchesRound.round = round;
    if (matches !== undefined) matchesRound.matches = matches;

    await matchesRound.save();
    return res.json(matchesRound);
  }
}