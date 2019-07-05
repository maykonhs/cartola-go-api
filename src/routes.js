const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PlayerController = require('./controllers/PlayerController');
const TeamController = require('./controllers/TeamController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/players', PlayerController.index);
routes.get('/players/:id', PlayerController.indexId);
routes.post('/players', upload.single('photo'), PlayerController.store);
routes.post('/players/:id', upload.single('photo'), PlayerController.update);
routes.get('/teams/:id', TeamController.indexId);
routes.get('/teams', TeamController.index);
routes.post('/teams', TeamController.store);
routes.post('/teams/:id', TeamController.update);

module.exports = routes;