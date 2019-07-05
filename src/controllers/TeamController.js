const Player = require('../models/Player');
const Team = require('../models/Team');

module.exports = {
  async indexId(req, res) {
    const data = await Team.findById(req.params.id);
    const player1 = await Player.findById(data.player1);
    const player2 = await Player.findById(data.player2);
    const player3 = await Player.findById(data.player3);
    const player4 = await Player.findById(data.player4);
    const player5 = await Player.findById(data.player5);
    const player6 = await Player.findById(data.player6);
    const player7 = await Player.findById(data.player7);
    const player8 = await Player.findById(data.player8);
    const player9 = await Player.findById(data.player9);
    const player10 = await Player.findById(data.player10);
    const player11 = await Player.findById(data.player11);
    const captain = data.captain;
    const coach = await Player.findById(data.coach);
    const lineup = [
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
      coach,
    ];
    const team = {
      name: data.name,
      tactic: data.tactic,
      captain,
      lineup,
    };
    return res.json(team);
  },
  async index(req, res) {
    const teams = await Team.find().sort('-createdAt');
    return res.json(teams);
  },
  async store(req, res) {
    const {
      name,
      tactic,
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
      captain,
      coach,
    } = req.body;
    const team = await Team.create({
      name,
      tactic,
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
      captain,
      coach,
    });
    return res.json(team);
  },
  async update(req, res) {
    const {
      name,
      tactic,
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
      captain,
      coach,
    } = req.body;

    const team = await Team.findById(req.params.id);

    if (tactic !== undefined) team.tactic = tactic;
    if (player1 !== undefined) team.player1 = player1;
    if (player2 !== undefined) team.player2 = player2;
    if (player3 !== undefined) team.player3 = player3;
    if (player4 !== undefined) team.player4 = player4;
    if (player5 !== undefined) team.player5 = player5;
    if (player6 !== undefined) team.player6 = player6;
    if (player7 !== undefined) team.player7 = player7;
    if (player8 !== undefined) team.player8 = player8;
    if (player9 !== undefined) team.player9 = player9;
    if (player10 !== undefined) team.player10 = player10;
    if (player11 !== undefined) team.player11 = player11;
    if (captain !== undefined) team.captain = captain;
    if (coach !== undefined) team.coach = coach;

    await team.save();

    req.io.emit(`team ${team.name}`, team);
    return res.json(team);
  }
}