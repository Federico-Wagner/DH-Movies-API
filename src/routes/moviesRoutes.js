const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const apimoviesController = require('../controllers/api/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);

//api routes
router.get('/api/movies', apimoviesController.list)
router.get('/api/movies/:id', apimoviesController.detail)
router.post('/api/movies/create', apimoviesController.create)
router.delete('/api/movies/delete/:id', apimoviesController.destroy)

module.exports = router;