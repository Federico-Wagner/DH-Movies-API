const db = require('../../database/models');
const sequelize = db.sequelize;


const apiactorController = {
    'list': (req, res) => {
        db.Actor.findAll()
            .then(genres => {
                res.status(200).json({
                    'meta': {
                        'status': 200,
                        'total': genres.length,
                        'url': "api/generes"
                    },
                    'data':genres
                })
            })
    },
    'detail': (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then(genre => {
                res.status(200).json({
                    'meta': {
                        'status': 200,
                        'url': "api/generes/detail/"+genre.id
                    },
                    'data':genre
                });
            });
    },
    'create': (req, res) => {
        res.json(req.body)
    },
    'delete': (req, res) => {
        res.json(req.body)
        
    }

}

module.exports = apiactorController;