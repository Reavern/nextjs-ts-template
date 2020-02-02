const _ = require('lodash');
const axios = require('axios');
const nodemailer = require('nodemailer');


const IS_PRODUCTION = false;

const STAGING_URL = "https://app.sandbox.midtrans.com/snap/v1/transactions";
const PRODUCTION_URL = "https://app.midtrans.com/snap/v1/transactions";

const REQUEST_URL = IS_PRODUCTION ? PRODUCTION_URL : STAGING_URL;

const EMAIL = "decodesnotification@gmail.com";
const PASS = "wsragtbjnhpicgob";

const SERVER_KEY = 'SB-Mid-server-a-5-8Zx5weHVBebnWpmuVfH4';

async function request(url, data) {
    return new Promise(async (resolve, reject) => {
        axios({
            url: url,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            auth: {
                username: SERVER_KEY,
                password: ''
            },
            data: data
        }).then((response) => {

            const responseData = _.get(response, 'data', {});
            const statusCode = _.get(response, 'data.status_code', '404-err');
            if (statusCode >= 300) {
                reject(new Error(`Status Code: ${statusCode} - Response: ${responseData}`));
            }

            resolve(responseData);
        }).catch((e) => {
            const errorMessage = _.get(e, 'response.data.error_messages', "NONE");
            reject(new Error(`${errorMessage.toString()}`));
        });
    });
}

module.exports = async (req, res) => {
    const jsonData = req.body;

    const response = request(REQUEST_URL, jsonData.parameter);

    response.then((data) => {
        res.json({ error: 0, message: "", data: data });
    }).catch((e) => {
        res.json({ error: 1, message: e.message, data: {} });
    });

};