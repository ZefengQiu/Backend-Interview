const urlController = require('../controllers/URLController');

module.exports = function(app) {
    app.route('/shorten-url')
        .post(urlController.shortenURL);

    app.route('/shorten-url')
        .delete(urlController.deleteShortLink);

    app.route('/:code')
        .get(urlController.visitShortLink);

    app.route('/shorten-url/report')
        .get(urlController.reportVisitedLink)
};