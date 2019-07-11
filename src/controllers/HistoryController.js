const History = require('../models/History');

module.exports = {
  async index(req, res) {
    const response = await History.find().sort('-createdAt');
    const history = [];
    response.map(item => {
      const {
        _id,
        round,
        createdAt,
        updatedAt,
      } = item;
      history.push({
        _id,
        round,
        createdAt,
        updatedAt,
      });
    })
    return res.json(history);
  },
  async indexId(req, res) {
    const history = await History.findById(req.params.id);
    return res.json(history);
  },
  async store(req, res) {
    const {
      round,
      teams,
    } = req.body;
    
    const response = await History.create({
      round,
      teams,
    });

    return res.json(response);
  },
  async update(req, res) {
    const {
      round,
      teams,
    } = req.body;

    const history = await History.findById(req.params.id);

    if (round !== undefined) history.round = round;
    if (teams !== undefined) history.teams = teams;

    await history.save();
    return res.json(history);
  }
}