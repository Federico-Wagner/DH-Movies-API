const db = require('../../database/models');
const sequelize = db.sequelize;


const apigenresController = {
    'list': (req, res) => {
        db.Genre.findAll()
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
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.status(200).json({
                    'meta': {
                        'status': 200,
                        'url': "api/generes/detail/"+genre.id
                    },
                    'data':genre
                });
            });
    }
}

module.exports = apigenresController;