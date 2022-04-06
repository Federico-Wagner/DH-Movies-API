const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');
const apigenresController = require('../controllers/api/genresController');

router.get('/genres', genresController.list);
router.get('/genres/detail/:id', genresController.detail);
router.get('/api/genres', apigenresController.list);
router.get('/api/genres/detail/:id', apigenresController.detail);



module.exports = router;