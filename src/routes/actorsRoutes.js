const express = require('express');
const router = express.Router();

const apiactorsController = require('../controllers/api/actorController');


router.get('/api/actors', apiactorsController.list);
router.get('/api/actors/detail/:id', apiactorsController.detail);

//router.post('/api/actors/create', apiactorsController.create);
//router.delete('/api/actors/delete/:id', apiactorsController.delete);



module.exports = router;
