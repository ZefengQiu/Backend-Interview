const csv = require('csv-express');

exports.getModels = function(req, res) {
    // if (Object.keys(req.body).length === 0) {
    //     res.csv(playerDao.getPlyers(), true);
    // }

    // switch (req.body.order) {
    //     case "total_rushing_yards":
    //         res.send(playerDao.getPlayersSortByYrds());
    //     case "longest_rush":
    //         res.send(playerDao.getPlayersSortByLng());
    //     case "total_touchdowns":
    //         res.send(playerDao.getPlayersSortByTD());
    //     default:
    //         res.status(400).json({error: "request is not valid"});
    // }
};

exports.getModelBasedOnID = function(req, res) {
    // const player = playerDao.getPlayer(req.body.name)
    // if (player.length < 1) {
    //     res.status(400).json({error: "request is not valid"});
    // } else {
    //     res.send(player);
    // }
};
