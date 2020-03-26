const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

routes.get('/ongs', (req, res) => {
    const body = req.body;

    console.log(body);

    return res.json({"message": "Get funfou!!!!"})
});

routes.post('/ong', (req, res) => {
    const { name } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    console.log(name);

    return res.json({"message": "Post funfou!!!!"})
});

module.exports = routes;