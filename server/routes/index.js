const thController = require('../controllers/playerController');

module.exports = function(app) {
    app.route('/player')
        .get(thController.getModelBasedOnID);

    app.route('/players')
        .get(thController.getModels);
};