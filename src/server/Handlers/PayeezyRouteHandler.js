// src/server/PayeezyRouteHandler.js
const Payeezy = require('../../middleware/encryptions/Payeezy');

class PayeezyHandler {
    constructor() { }

    async handle(req, res) {
        res.json({ status: true, ...req.encryptedData, author: '' });
    }
}

module.exports = {
    PayeezyHandler,
    Payeezy
};