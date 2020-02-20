const players = require('../data/rushing.json');

module.exports = class PlayerDao {
    constructor() {
        this.players = players;
    }

    getPlayer(name) {
        return this.players.filter(p => p.Player == name);
    }

    getPlyers() {
        return this.players;
    }

    getPlayersSortByYrds() {
        return this.players.sort((a, b) => (a.Yrds > b.Yrds) ? 1 : -1);
    }

    getPlayersSortByLng() {
        return this.players.sort((a, b) => (a.Lng > b.Lng) ? 1 : -1);
    }

    getPlayersSortByTD() {
        return this.players.sort((a, b) => (a.TD > b.TD) ? 1 : -1);
    }

}