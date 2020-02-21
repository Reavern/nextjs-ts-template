const _ = require('lodash');
const axios = require('axios');

module.exports = async (req, res) => {
    const jsonData = req.body;

    res.json(jsonData);
};