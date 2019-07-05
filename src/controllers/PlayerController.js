const Player = require('../models/Player');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
  async index(req, res) {
    const players = await Player.find().sort('-createdAt');
    return res.json(players);
  },
  async indexId(req, res) {
    const player = await Player.findById(req.params.id);
    return res.json(player);
  },
  async store(req, res) {
    const {
      name,
      position,
      team,
      probability,
      average,
      lastGrade,
      value,
      appreciation,
    } = req.body;
    const { filename: photo } = req.file;
    await sharp(req.file.path)
      .resize(64)
      .png()
      .toFile(
        path.resolve(req.file.destination, 'resized', photo)
      )
    
    fs.unlinkSync(req.file.path);
    const player = await Player.create({
      name,
      position,
      team,
      probability,
      average,
      lastGrade,
      value,
      appreciation,
      photo,
    });

    return res.json(player);
  },
  async update(req, res) {
    const {
      name,
      position,
      team,
      probability,
      average,
      lastGrade,
      value,
      appreciation,
    } = req.body;
    const { filename: photo } = req.file;
    await sharp(req.file.path)
      .resize(64)
      .png()
      .toFile(
        path.resolve(req.file.destination, 'resized', photo)
      )
    
    fs.unlinkSync(req.file.path);

    const player = await Player.findById(req.params.id);

    if (name !== undefined) player.name = name;
    if (position !== undefined) player.position = position;
    if (team !== undefined) player.team = team;
    if (probability !== undefined) player.probability = probability;
    if (average !== undefined) player.average = average;
    if (lastGrade !== undefined) player.lastGrade = lastGrade;
    if (value !== undefined) player.value = value;
    if (appreciation !== undefined) player.appreciation = appreciation;
    if (photo !== undefined) player.photo = photo;

    await player.save();
    return res.json(player);
  }
}