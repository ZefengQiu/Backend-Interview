const playerController = require('../controllers/playerController');

module.exports = function(app) {
    app.route('/player')
        .get(playerController.getPlayerFromName);

    app.route('/players')
        .get(playerController.getPlayers);
};