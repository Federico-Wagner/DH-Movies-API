const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;

const apimoviesController = {
    'list': (req, res) => {
        Movies.findAll({
            include: ['genre']
        })
            .then(movies => {
                res.json(movies)
            })
    },
    'detail': (req, res) => {
        Movies.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.json(movie);
            });
    },
    create: function (req,res) {
        console.log(req.body);
        console.log("abc");
        res.send(req.body)
        /*
        Movies
        .create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        /*
        .then((movie)=> {
            return res.json(movie)})            
        .catch(error => res.send(error))
        */
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    }
}

module.exports = apimoviesController;