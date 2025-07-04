// src/server/VantivRouteHandler.js
const Vantiv = require('../../middleware/encryptions/Vantiv');

class VantivHandler {
    constructor() { }

    async handle(req, res) {
        res.json({ status: true, ...req.encryptedData, author: '' });
    }
}

module.exports = {
    VantivHandler,
    Vantiv
};