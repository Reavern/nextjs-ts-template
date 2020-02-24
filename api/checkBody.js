const _ = require('lodash');
const axios = require('axios');

module.exports = async (req, res) => {
    const jsonData = req.body;
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.json(jsonData);
};